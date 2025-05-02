export const questions = [
    {
      id: 1,
      text: "Comment préfères-tu passer une soirée avec tes fillot.e.s ?",
      answers: [
        { text: "En faisant la tournée des bars jusqu'au bout de la nuit", value: "a" },
        { text: "En organisant un repas traditionnel avec des chants paillards", value: "b" },
        { text: "En les aidant à réviser pour leurs partiels", value: "c" },
        { text: "En discutant de leur avenir professionnel et de leurs projets", value: "d" },
        { text: "En veillant sur eux pendant qu'ils font la fête", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 1, protecteur: 0, academique: 0 },
        "b": { festif: 1, mentor: 0, traditionnel: 3, protecteur: 0, academique: 0 },
        "c": { festif: 0, mentor: 1, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 1, academique: 1 },
        "e": { festif: 2, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 2,
      text: "Lors d'un baptême, quelle est ta priorité ?",
      answers: [
        { text: "Ambiancer tout le monde et mettre le feu", value: "a" },
        { text: "Respecter scrupuleusement le rituel et les traditions", value: "b" },
        { text: "Expliquer l'histoire et le sens des traditions", value: "c" },
        { text: "Encourager les impétrants et leur donner confiance", value: "d" },
        { text: "Veiller à ce que rien de dangereux ne se passe", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 0, academique: 1 },
        "c": { festif: 0, mentor: 1, traditionnel: 2, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 1, academique: 0 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 3,
      text: "Un de tes fillot.e.s a du mal avec ses cours. Que fais-tu ?",
      answers: [
        { text: "Tu l'emmènes boire un coup pour lui changer les idées", value: "a" },
        { text: "Tu lui rappelles qu'un bon faluchard est avant tout un bon étudiant'", value: "b" },
        { text: "Tu organises des sessions de révision", value: "c" },
        { text: "Tu l'aides à identifier ses difficultés et à trouver des solutions", value: "d" },
        { text: "Tu le surveilles de près et vérifies qu'il travaille bien tous ses cours", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 1, academique: 1 },
        "c": { festif: 0, mentor: 1, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 1, academique: 1 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 1 }
      }
    },
    {
      id: 4,
      text: "Quel type d'événement préfères-tu organiser pour tes fillot.e.s ?",
      answers: [
        { text: "Une grosse soirée avec tous tes potes", value: "a" },
        { text: "Un p'tit BBQ à Feyssine", value: "b" },
        { text: "Une visite culturelle", value: "c" },
        { text: "Une soirée révi en chill", value: "d" },
        { text: "Une formation prévention sur les risques de l'alcool et des drogues", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 2, mentor: 0, traditionnel: 3, protecteur: 0, academique: 0 },
        "c": { festif: 0, mentor: 1, traditionnel: 1, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 0, academique: 1 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 5,
      text: "Ton filleul te demande de l'aide pour sa vie personnelle. Quelle est ta réaction ?",
      answers: [
        { text: "Tu l'emmènes faire la fête pour qu'il oublie ses soucis", value: "a" },
        { text: "Tu lui rappelles les valeurs traditionnelles de la faluche", value: "b" },
        { text: "Tu lui conseilles des livres ou ressources à consulter", value: "c" },
        { text: "Tu l'écoutes attentivement et partages ton expérience", value: "d" },
        { text: "Tu l'accompagnes dans toutes ses démarches pour t'assurer qu'il va bien", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 0, academique: 0 },
        "c": { festif: 0, mentor: 1, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 1, academique: 0 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 6,
      text: "Que considères-tu comme le plus important dans ton rôle de PM ?",
      answers: [
        { text: "Faire vivre des moments inoubliables à tes fillot.e.s", value: "a" },
        { text: "Transmettre les valeurs et les coutumes de la fal", value: "b" },
        { text: "Aider à leur réussite universitaire", value: "c" },
        { text: "Guider et conseiller pour leur développement personnel", value: "d" },
        { text: "Assurer leur bien-être et leur sécurité", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 1, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 0, academique: 1 },
        "c": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 0, academique: 0 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 7,
      text: "Quelle approche privilégies-tu pour enseigner la faluche à ton fillot ?",
      answers: [
        { text: "L'emmener à des soirées pour qu'il apprenne en s'amusant", value: "a" },
        { text: "Lui les coutumes, chants, etc, et leurs significations", value: "b" },
        { text: "Lui raconter des anecdotes et faits sur l'histoire de la faluche", value: "c" },
        { text: "Adapter l'enseignement à sa personnalité et ses intérêts", value: "d" },
        { text: "Y aller progressivement pour ne pas le submerger", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 1, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 0, academique: 1 },
        "c": { festif: 0, mentor: 0, traditionnel: 1, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 1, protecteur: 0, academique: 0 },
        "e": { festif: 0, mentor: 1, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 8,
      text: "Quelle est ta priorité lorsque tu parraines ou marraines un.e étudiant.e ?",
      answers: [
        { text: "Faire en sorte qu'ils s'amusent et profitent de leur vie étudiante", value: "a" },
        { text: "Leur transmettre les traditions et les valeurs de la faluche", value: "b" },
        { text: "Les aider à atteindre leurs objectifs scolaires", value: "c" },
        { text: "Les guider et les soutenir dans leurs choix personnels et professionnels", value: "d" },
        { text: "Veiller à ce qu'ils se sentent en sécurité et soutenus pendant leur vie étudiante", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 0, academique: 0 },
        "c": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 0, academique: 1 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },    
    {
      id: 9,
      text: "Comment vois-tu ta relation avec tes fillot.e.s après leur diplôme ?",
      answers: [
        { text: "On continuera à faire la fête ensemble régulièrement", value: "a" },
        { text: "On participera ensemble aux congrès faluchards", value: "b" },
        { text: "On discutera de leurs avancées dans la vie", value: "c" },
        { text: "On restera en contact pour échanger sur leur progression professionnelle", value: "d" },
        { text: "Je serai toujours disponible s'ils ont besoin d'aide", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 2, mentor: 0, traditionnel: 3, protecteur: 0, academique: 0 },
        "c": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 0, academique: 1 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    },
    {
      id: 10,
      text: "Quelle devise représente le mieux ta vision du parrainage ?",
      answers: [
        { text: "La vie étudiante est une fête, profitons-en !", value: "a" },
        { text: "Honneur et tradition avant tout", value: "b" },
        { text: "Le savoir est la plus grande richesse", value: "c" },
        { text: "Guide ton fillot vers son propre chemin", value: "d" },
        { text: "Veille sur eux comme sur ta propre famille", value: "e" }
      ],
      scoring: {
        "a": { festif: 3, mentor: 0, traditionnel: 0, protecteur: 0, academique: 0 },
        "b": { festif: 0, mentor: 0, traditionnel: 3, protecteur: 0, academique: 0 },
        "c": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 0, academique: 3 },
        "d": { festif: 0, mentor: 3, traditionnel: 0, protecteur: 0, academique: 0 },
        "e": { festif: 0, mentor: 0, traditionnel: 0, protecteur: 3, academique: 0 }
      }
    }
  ];
  
  export const categoryDescriptions = {
    festif: "Tu es un PM qui aime faire la fête et créer des moments mémorables",
    mentor: "Tu es un guide qui aide tes fillot.e.s à trouver leur chemin",
    traditionnel: "Tu es gardien des traditions et valeurs de la faluche",
    protecteur: "Tu veilles au bien-être et à la sécurité de tes fillot.e.s",
    academique: "Tu privilégies la réussite universitaire avant tout"
  };