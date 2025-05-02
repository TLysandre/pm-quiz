import { questions, categoryDescriptions } from './questions';

/**
 * Calcule les scores pour chaque catégorie basés sur les réponses données
 * @param {Object} answers - Un objet avec les ID des questions comme clés et les valeurs de réponse comme valeurs
 * @returns {Object} - Un objet avec les scores pour chaque catégorie
 */
export const calculateScores = (answers) => {
  // Initialisation des scores à zéro pour chaque catégorie
  const scores = {
    festif: 0,
    mentor: 0,
    traditionnel: 0,
    protecteur: 0,
    academique: 0
  };

  // Parcourir toutes les réponses données
  Object.entries(answers).forEach(([questionId, answerValue]) => {
    // Convertir l'ID de la question en nombre (car les clés d'objet sont des chaînes)
    const numericQuestionId = parseInt(questionId);
    
    // Trouver la question correspondante
    const question = questions.find(q => q.id === numericQuestionId);
    
    if (question && question.scoring[answerValue]) {
      // Ajouter les points pour chaque catégorie
      Object.entries(question.scoring[answerValue]).forEach(([category, points]) => {
        scores[category] += points;
      });
    }
  });

  return scores;
};

/**
 * Détermine le profil dominant basé sur les scores calculés
 * @param {Object} scores - Un objet avec les scores pour chaque catégorie
 * @returns {String} - Le nom du profil dominant
 */
export const determineProfile = (scores) => {
  // Trouver le score maximum
  const maxScore = Math.max(...Object.values(scores));
  
  // Trouver toutes les catégories qui ont le score maximum
  const topCategories = Object.keys(scores).filter(category => scores[category] === maxScore);
  
  // Si plusieurs catégories ont le même score maximum
  if (topCategories.length > 1) {
    // Si tous les scores sont relativement équilibrés
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / Object.keys(scores).length;
    
    // Si l'écart entre les scores est faible, on considère un profil équilibré
    const threshold = totalScore * 0.15; // 15% d'écart considéré comme faible
    const isBalanced = Object.values(scores).every(score => 
      Math.abs(score - averageScore) <= threshold
    );
    
    if (isBalanced) {
      return "balanced";
    }
  }
  
  // Sinon on retourne la première catégorie avec le score maximum
  return topCategories[0];
};

/**
 * Calcule les pourcentages pour chaque catégorie
 * @param {Object} scores - Un objet avec les scores pour chaque catégorie
 * @returns {Object} - Un objet avec les pourcentages pour chaque catégorie
 */
export const calculatePercentages = (scores) => {
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  if (totalScore === 0) return Object.keys(scores).reduce((acc, category) => {
    acc[category] = 0;
    return acc;
  }, {});
  
  return Object.keys(scores).reduce((percentages, category) => {
    percentages[category] = Math.round((scores[category] / totalScore) * 100);
    return percentages;
  }, {});
};

/**
 * Obtient les forces et les faiblesses basées sur les scores
 * @param {Object} scores - Un objet avec les scores pour chaque catégorie
 * @returns {Object} - Un objet avec les forces et les faiblesses
 */
export const getStrengthsAndWeaknesses = (scores) => {
  const percentages = calculatePercentages(scores);
  const sortedCategories = Object.keys(percentages).sort((a, b) => percentages[b] - percentages[a]);
  
  // Les 2 premières catégories sont considérées comme des forces
  const strengths = sortedCategories.slice(0, 2).map(category => ({
    category,
    percentage: percentages[category],
    description: categoryDescriptions[category]
  }));
  
  // Les 2 dernières catégories sont considérées comme des faiblesses
  const weaknesses = sortedCategories.slice(-2).map(category => ({
    category,
    percentage: percentages[category],
    description: categoryDescriptions[category]
  }));
  
  return { strengths, weaknesses };
};

/**
 * Génère un conseil personnalisé basé sur le profil et les scores
 * @param {String} profile - Le profil dominant
 * @param {Object} scores - Un objet avec les scores pour chaque catégorie
 * @returns {String} - Un conseil personnalisé
 */
export const generateAdvice = (profile, scores) => {
  const percentages = calculatePercentages(scores);
  const lowestCategory = Object.keys(percentages).reduce((lowest, category) => 
    percentages[category] < percentages[lowest] ? category : lowest
  );
  
  // Messages personnalisés selon le profil et la catégorie la plus faible
  const adviceMessages = {
    festif: {
      academique: "Essaie d'équilibrer les festivités avec un peu plus de soutien académique pour tes fillot.e.s.",
      mentor: "Tu crées une ambiance géniale, mais n'oublie pas de prendre le temps de guider tes fillot.e.s individuellement.",
      traditionnel: "Tout en gardant ton énergie festive, intègre plus de traditions faluchards pour enrichir l'expérience.",
      protecteur: "Continue de faire la fête, mais veille aussi à la sécurité et au bien-être de tes fillot.e.s."
    },
    mentor: {
      academique: "Complète ton mentorat avec plus de soutien concret pour les études de tes fillot.e.s.",
      festif: "N'oublie pas d'intégrer des moments de détente et de fête pour renforcer les liens.",
      traditionnel: "Enrichis ton accompagnement en transmettant davantage les traditions faluchards.",
      protecteur: "Reste attentif aux besoins de sécurité et de bien-être de tes fillot.e.s."
    },
    traditionnel: {
      academique: "Les traditions sont importantes, mais pense aussi à soutenir la réussite académique.",
      festif: "Ajoute un peu plus de légèreté et de festivités à ton approche traditionnelle.",
      mentor: "Au-delà des traditions, développe ton rôle de guide personnel pour tes fillot.e.s.",
      protecteur: "Assure-toi que le respect des traditions n'entrave pas le bien-être de tes fillot.e.s."
    },
    protecteur: {
      academique: "Tout en veillant sur tes fillot.e.s, encourage davantage leur développement académique.",
      festif: "Permets à tes fillot.e.s de s'amuser davantage tout en restant vigilant.",
      mentor: "Complète ta protection par plus de conseils pour leur développement personnel.",
      traditionnel: "Intègre plus de traditions faluchards dans ton approche protectrice."
    },
    academique: {
      festif: "N'oublie pas que la vie étudiante passe aussi par des moments de détente et de fête.",
      mentor: "Au-delà des études, guide tes fillot.e.s dans leur développement personnel.",
      traditionnel: "Enrichis ton approche académique avec les traditions de la faluche.",
      protecteur: "Veille aussi au bien-être émotionnel de tes fillot.e.s, pas seulement à leur réussite."
    },
    balanced: "Continue à maintenir cet équilibre, mais n'hésite pas à adapter ton approche selon les besoins spécifiques de chaque filleul."
  };
  
  // Si c'est un profil équilibré, on retourne le conseil générique
  if (profile === "balanced") {
    return adviceMessages.balanced;
  }
  
  // Sinon on retourne le conseil spécifique basé sur le profil et la catégorie la plus faible
  return adviceMessages[profile][lowestCategory] || 
    "Continue à développer ton style de parrainage en restant attentif aux besoins de tes fillot.e.s.";
};

/**
 * Traite les réponses et renvoie le résultat complet
 * @param {Object} answers - Un objet avec les ID des questions comme clés et les valeurs de réponse comme valeurs
 * @returns {Object} - Un objet avec le profil, les scores, les pourcentages, etc.
 */
export const processQuizResults = (answers) => {
  const scores = calculateScores(answers);
  const profile = determineProfile(scores);
  const percentages = calculatePercentages(scores);
  const { strengths, weaknesses } = getStrengthsAndWeaknesses(scores);
  const advice = generateAdvice(profile, scores);
  
  return {
    profile,
    scores,
    percentages,
    strengths,
    weaknesses,
    advice
  };
};

/**
 * Vérifie si le quiz est complet
 * @param {Object} answers - Un objet avec les ID des questions comme clés et les valeurs de réponse comme valeurs
 * @returns {Boolean} - True si toutes les questions ont été répondues
 */
export const isQuizComplete = (answers) => {
  return questions.every(question => Object.prototype.hasOwnProperty.call(answers, question.id));
};

/**
 * Obtient le progrès du quiz en pourcentage
 * @param {Object} answers - Un objet avec les ID des questions comme clés et les valeurs de réponse comme valeurs
 * @returns {Number} - Le pourcentage de questions répondues
 */
export const getQuizProgress = (answers) => {
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  
  return Math.round((answeredCount / totalQuestions) * 100);
};