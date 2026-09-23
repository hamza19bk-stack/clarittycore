/**
 * TEXTES PROPRES À CE SITE — fusionnés par-dessus src/data/content.ts.
 *
 * Laisse l'objet vide pour garder les textes du template.
 * Clés possibles : ui, home, about, services, booking, contact, notFound, offers.
 * Seules les valeurs indiquées remplacent celles du template ; tout le reste est conservé.
 * Pour `offers` (tableau), l'élément N remplace les champs de la N-ième offre.
 *
 * Mêmes règles que content.ts : aucun fait inventé (chiffres, diplômes, avis),
 * aucune promesse commerciale, aucune allégation médicale, ni prix ni tarif.
 *
 * ClarittyCore — angle : l'essentiel d'abord. On enlève le superflu, on garde
 * les fondamentaux qui comptent vraiment, et on fait moins de choses mais
 * mieux choisies. Le sujet ici est le TRI (ce qui entre dans le plan et ce qui
 * en sort), distinct du « plan lisible » et du « comprendre pourquoi ».
 */
import { isSet, nb } from '../lib/utils';
import { site } from './site';

/* Ville ou zone gérée automatiquement par site.ts (jamais écrite en dur ici). */
const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';

export const overrides: Record<string, unknown> = {
  // ================================================================ ACCUEIL
  home: {
    seo: {
      title: place
        ? `Coach sportif à ${place}${nb}: l’essentiel d’abord, le superflu en moins`
        : `Coach sportif${nb}: l’essentiel d’abord, le superflu en moins`,
      description: `Coaching sportif recentré sur les fondamentaux${nb}: un plan allégé de ce qui n’apporte rien, en présentiel, en visio ou à distance, pour faire moins de choses et les faire mieux.`,
    },
    hero: {
      eyebrow: 'Coaching sportif essentiel',
      titleLead: 'On enlève le superflu,',
      titleMark: 'il reste l’essentiel',
      lead: `Un entraînement encombré finit par peser, puis par s’arrêter. Ici, on commence par trier${nb}: ce qui sert ton objectif reste, le reste sort du plan. Tu as peu de choses à faire, et tu les fais vraiment bien.`,
      visualLabel: 'Trié, puis travaillé',
    },
    highlights: {
      eyebrow: 'Le tri',
      title: 'Ce que l’on garde, ce que l’on laisse',
      subtitle: `Quatre partis pris qui allègent l’entraînement${nb}: ils expliquent pourquoi un plan court tient mieux qu’un plan chargé.`,
      items: [
        { title: 'Un bilan qui fait le tri', text: 'Avant d’ajouter quoi que ce soit, on regarde ce qui compte vraiment dans ta situation. Ton objectif, ton quotidien et tes contraintes décident de ce qui entre dans le plan.' },
        { title: 'Les fondamentaux d’abord', text: `Pousser, tirer, s’accroupir, se déplacer, tenir sa posture${nb}: ces bases couvrent la plus grande part du travail. Elles méritent d’être maîtrisées avant toute variation spectaculaire.` },
        { title: 'Ce qui n’apporte rien s’en va', text: `Un exercice gardé par habitude, une méthode à la mode, un détail sans effet sur ton objectif${nb}: on l’enlève sans regret. Moins de lignes, plus de netteté.` },
        { title: 'Des séances allégées', text: 'Une séance courte et dense vaut mieux qu’une séance interminable faite à moitié. On retire ce qui dilue l’effort pour garder ce qui le construit.' },
      ],
    },
    offers: {
      eyebrow: 'Les services',
      title: 'Le format qui va droit au but',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Trier, poser, exécuter, alléger',
      subtitle: `Rien d’inutile à aucune étape${nb}: on enlève d’abord, on construit ensuite, et on continue d’enlever au fil du temps.`,
      steps: [
        { title: 'Le tri de départ', text: `On pose tout sur la table${nb}: objectif, habitudes, créneaux réels, énergie disponible. Puis on écarte ce qui n’a pas sa place, pour ne garder que ce qui te fera avancer.` },
        { title: 'Le plan réduit à l’utile', text: 'Ton programme tient en peu de lignes. Chaque exercice a gagné sa place, et tu sais lesquels restent prioritaires si une séance doit être écourtée.' },
        { title: 'L’exécution sans dispersion', text: 'En séance, on reste sur les mouvements qui comptent et on peaufine leur qualité. Pas de remplissage entre deux séries, pas d’exercice ajouté pour faire nombre.' },
        { title: 'L’élagage régulier', text: 'À intervalles réguliers, on relit le plan et on retire ce qui s’y est accumulé. Un programme garde sa force tant qu’il reste court.' },
      ],
    },
    cta: {
      eyebrow: 'Premier pas',
      title: `Par quoi commencer${nb}?`,
      lead: 'Une première séance pour repérer le peu de choses qui comptent vraiment dans ta situation, et mettre le reste de côté.',
    },
  },

  // =============================================================== À PROPOS
  about: {
    seo: {
      title: `À propos${nb}: un coaching sportif réduit à ce qui compte`,
      description: `Une approche du coaching sportif fondée sur le tri${nb}: garder les fondamentaux, écarter le superflu et construire un entraînement court, net et tenable.`,
    },
    hero: {
      eyebrow: 'À propos',
      titleLead: 'Faire moins de choses,',
      titleMark: 'et les faire bien',
      lead: `Beaucoup de programmes s’effondrent parce qu’ils en demandent trop. L’approche est ici inverse${nb}: on enlève jusqu’à ce qu’il ne reste que l’utile, puis on travaille ce qui reste avec sérieux.`,
    },
    approach: {
      eyebrow: 'L’approche',
      title: 'Quatre partis pris de tri',
      subtitle: 'Ils orientent chaque décision, du premier échange au suivi dans la durée.',
      steps: [
        { title: 'Commencer par enlever', text: `Un accompagnement ne démarre pas par une liste d’exercices, mais par une question simple${nb}: qu’est-ce qui te ferait réellement progresser, et qu’est-ce qui n’est là que pour remplir${nb}?` },
        { title: 'Distinguer l’utile du visible', text: 'Certains exercices impressionnent sans rien apporter à ton objectif. D’autres paraissent modestes et changent tout. Le tri se fait sur l’effet réel, pas sur l’allure.' },
        { title: 'Protéger le cœur du plan', text: 'Quand la semaine se complique, il faut savoir ce que l’on garde absolument. Ce noyau est identifié dès le départ, pour qu’une période chargée ne fasse pas tout tomber.' },
        { title: 'Résister à l’accumulation', text: 'Un programme grossit naturellement, exercice après exercice. Le travail consiste aussi à le dégraisser régulièrement, pour qu’il reste faisable.' },
      ],
    },
    philosophy: {
      eyebrow: 'La philosophie',
      title: 'Peu de choses, choisies avec exigence',
      subtitle: 'Ce qui guide chaque arbitrage, du premier bilan au suivi dans la durée.',
      items: [
        { title: 'Simple n’est pas facile', text: 'Un plan réduit aux fondamentaux ne demande pas moins d’effort. Il demande seulement moins de dispersion, et une exécution mieux travaillée.' },
        { title: 'Choisir, c’est renoncer', text: 'Tout ne peut pas être prioritaire en même temps. On décide ensemble de ce qui passe en premier, quitte à reporter le reste à plus tard.' },
        { title: 'La durée récompense la sobriété', text: 'Un entraînement court et net traverse les semaines chargées. Un programme surchargé finit abandonné, même avec la meilleure volonté.' },
      ],
      commitmentsTitle: 'Ce que le tri t’apporte',
      commitments: [
        'Un premier bilan sans jugement, centré sur ce qui compte pour toi.',
        'Un plan tenant en peu de lignes, où chaque ligne a sa raison d’être.',
        'Un noyau de séances identifié, à garder même les semaines difficiles.',
        'Un élagage régulier, pour éviter que le programme ne s’alourdisse.',
      ],
      notHereTitle: 'Ce que l’on écarte',
      notHere: [
        'Des programmes à rallonge, impossibles à tenir sur la durée.',
        'Des exercices ajoutés pour impressionner plutôt que pour servir.',
        `Des méthodes à la mode présentées comme incontournables.`,
        `Des conseils médicaux${nb}: pour toute question de santé, ton médecin reste l’interlocuteur de référence.`,
      ],
      quote: `«${nb}Un plan est au point quand il n’y a plus rien à en retirer.${nb}»`,
    },
    values: {
      eyebrow: 'Les valeurs',
      title: 'Ce qui guide chaque arbitrage',
      subtitle: 'Des repères présents dès la première séance et tout au long de l’accompagnement.',
      items: [
        { title: 'Écoute', text: 'On ne peut pas trier à ta place sans te connaître. Tes habitudes, ton rythme de vie et ce que tu aimes faire orientent chaque choix.' },
        { title: 'Exigence', text: 'Moins d’exercices veut dire plus d’attention sur chacun. L’exécution reste précise, la progression reste suivie.' },
        { title: 'Franchise', text: 'Si un exercice ne sert pas ton objectif, on te le dit. Si une envie mérite de rester au plan pour le plaisir, on l’assume aussi.' },
        { title: 'Sobriété', text: 'Peu de matériel, peu de consignes, peu de lignes à retenir. Ce qui reste doit pouvoir tenir en tête sans effort.' },
      ],
    },
    formats: {
      eyebrow: 'Travailler ensemble',
      title: 'Trois formats, une même sobriété',
      subtitle: `Le cadre change selon ta situation${nb}; le travail de tri, lui, reste identique.`,
      texts: {
        inPerson: `Des séances individuelles en salle, à domicile ou en extérieur, centrées sur quelques mouvements essentiels${nb}: chacun est corrigé jusqu’à ce qu’il soit net.`,
        online: `En visio, la séance va droit à l’essentiel${nb}: peu de matériel, peu d’exercices, une exécution observée et corrigée en direct.`,
        remote: 'Un programme écrit qui tient en peu de lignes, relu à chaque fin de cycle pour enlever ce qui ne sert plus.',
      },
    },
    cta: {
      eyebrow: 'La suite',
      title: `Qu’est-ce qui compte vraiment pour toi${nb}?`,
      lead: 'Dis-nous où tu en es et ce que tu voudrais atteindre. Le tri commence là, avant toute proposition de programme.',
    },
  },

  // =============================================================== SERVICES
  services: {
    seo: {
      title: `Services${nb}: du coaching sportif sans superflu`,
      description: `Coaching individuel en présentiel ou en visio, programme d’entraînement allégé et repères nutritionnels simples${nb}: des formats de coaching sportif centrés sur les fondamentaux.`,
    },
    hero: {
      eyebrow: 'Les services',
      titleLead: 'Des formats courts,',
      titleMark: 'un contenu trié',
      lead: 'Quel que soit le format choisi, l’accompagnement commence par un bilan, se limite à ce qui sert vraiment ton objectif et s’allège encore au fil du temps.',
    },
    offers: {
      eyebrow: 'Le détail',
      title: 'Choisis ton format, sans surcharge',
    },
    common: {
      eyebrow: 'Quel que soit le format',
      title: 'Les quatre constantes',
      subtitle: `Communes à chaque accompagnement${nb}: ce sont elles qui empêchent un programme de gonfler jusqu’à devenir intenable.`,
      items: [
        { title: 'Un bilan avant toute liste', text: 'Aucun exercice n’est proposé avant d’avoir posé ton point de départ, tes contraintes et l’objectif que l’on veut servir.' },
        { title: 'Un plan que l’on allège', text: 'Le programme est relu régulièrement, et l’on y retire autant qu’on y ajoute. Ce qui a fait son temps sort.' },
        { title: 'Un échange direct', text: `Un doute sur l’utilité d’un exercice${nb}? Tu poses la question à ton coach, et la réponse peut mener à le supprimer.` },
        { title: 'Peu de repères, mais suivis', text: `Charge, répétitions, aisance, ressenti${nb}: quelques indicateurs bien choisis suffisent à savoir si tu avances.` },
      ],
    },
    process: {
      eyebrow: 'Comment ça se passe',
      title: 'Du premier message au plan allégé',
      subtitle: `Un déroulé court, sans étape décorative${nb}: tu sais dès le départ comment se construit l’accompagnement.`,
      steps: [
        { title: 'Le premier échange', text: 'Tu réserves une séance ou tu nous écris. On parle de ton objectif, de ton emploi du temps et de ce qui t’a déjà découragé par le passé.' },
        { title: 'Le bilan et le tri', text: 'Habitudes, niveau de départ, matériel, points de vigilance. On identifie ensuite ce qui mérite d’entrer dans le plan, et ce que l’on laisse de côté.' },
        { title: 'Le plan resserré', text: `Format, fréquence réaliste, contenu des séances${nb}: tout tient en peu de lignes, avec l’ordre de priorité si une séance doit être raccourcie.` },
        { title: 'L’entraînement et l’élagage', text: `Les séances s’enchaînent, avec corrections et ajustements. En fin de cycle, on garde ce qui fonctionne et on retire le reste${nb}: le plan ne s’alourdit jamais.` },
      ],
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: `Trop de choses à faire, pas assez de temps${nb}?`,
      lead: 'C’est exactement le point de départ. Une première séance permet de poser ton objectif et de réduire ton entraînement à ce qui compte vraiment.',
    },
  },

  // ============================================================ RÉSERVATION
  booking: {
    seo: {
      title: `Réservation${nb}: une séance de coaching sportif pour trier`,
      description: `Réserve ta séance de coaching sportif${nb}: un bilan, un objectif clair et un premier tri dans ce que tu fais déjà, selon le format qui te convient.`,
    },
    hero: {
      eyebrow: 'Réservation',
      titleLead: 'Une séance pour faire le tri,',
      titleMark: 'puis avancer léger',
      lead: `Une séance pour poser ton objectif, regarder ce que tu fais déjà et repérer ce qui mérite de rester. Pas de test d’entrée, pas de discours commercial${nb}— un bilan honnête et un plan de départ court.`,
    },
    cta: {
      eyebrow: 'Dernier détail',
      title: 'Commencer par enlever, c’est déjà avancer',
      lead: 'Une séance pour savoir où tu en es et quelles sont tes vraies priorités. Tu repars avec une liste courte, et rien de plus.',
    },
  },

  // ================================================================ CONTACT
  contact: {
    seo: {
      title: `Contact${nb}: une question sur ce coaching sportif`,
      description: `Une question sur un format, un exercice ou la façon dont le plan est construit${nb}? Écris, appelle ou réserve directement ta séance.`,
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: `Une question directe${nb}?`,
      titleMark: 'Une réponse directe',
      lead: `Pas de formulaire anonyme${nb}: tu écris ou tu appelles, et ton coach te répond. Dis simplement où tu en es et ce que tu cherches à atteindre, on verra ensemble ce qui mérite ton temps.`,
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: 'Une question courte, un objectif sérieux',
      lead: `Si ta question tient en une ligne, écris-nous. S’il s’agit d’un vrai projet, réserve plutôt une première séance${nb}: c’est là que le tri commence.`,
    },
  },

  // ================================================================= OFFRES
  offers: [
    {
      summary: `Une séance en tête-à-tête ramenée à l’essentiel${nb}: quelques mouvements qui comptent, corrigés jusqu’à être nets.`,
      description:
        `Ton coach est à tes côtés pendant toute la séance, et le contenu reste volontairement resserré. Peu d’exercices, mais travaillés avec attention${nb}: posture corrigée en direct et intensité ajustée à ta forme du jour.`,
      includes: [
        `Bilan de départ${nb}: objectifs, habitudes, niveau d’activité`,
        'Séances en salle, à domicile ou en extérieur, selon la zone couverte',
        'Un contenu resserré autour des mouvements fondamentaux',
        `Points d’étape réguliers${nb}: ce que l’on garde, ce que l’on enlève`,
      ],
      forWho:
        'Tu t’éparpilles entre trop d’exercices, ou tu reprends après une pause et tu veux repartir sur une base courte et propre.',
    },
    {
      summary: `Le même contenu trié, à distance${nb}: une séance guidée en direct, sans matériel superflu.`,
      description:
        `Caméra allumée, la séance est menée en direct depuis chez toi, ta salle ou ton lieu de déplacement. Le format impose la sobriété, et c’est tant mieux${nb}: peu de matériel, quelques mouvements bien choisis, observés et corrigés série après série.`,
      includes: [
        'Séance guidée en direct, échauffement et retour au calme compris',
        'Un contenu adapté au peu de matériel dont tu disposes',
        'Consignes pour bien t’installer face à la caméra',
        'Une priorité claire à travailler d’une séance à l’autre',
      ],
      forWho:
        'Tes horaires changent souvent ou tu te déplaces, et tu veux un guidage en direct sur le strict nécessaire.',
    },
    {
      summary: `Un plan écrit qui tient en peu de lignes${nb}: séances, séries, repos et progression, sans remplissage.`,
      description:
        'Un programme construit à partir de ton objectif, de ton niveau et du matériel dont tu disposes, puis volontairement raccourci. Chaque séance indique ce qui est prioritaire et ce qui peut sauter les jours compliqués, et le plan s’allège encore à chaque fin de cycle.',
      includes: [
        `Entretien de cadrage${nb}: objectif, contraintes, matériel`,
        'Un plan court, structuré en cycles, avec une progression prévue',
        'L’ordre de priorité des exercices en cas de séance écourtée',
        'Révision du plan en fin de cycle, pour retirer ce qui ne sert plus',
      ],
      forWho:
        'Tu t’entraînes déjà en autonomie, mais ton programme s’est chargé au point de devenir difficile à tenir.',
    },
    {
      summary: `Quelques repères d’hygiène alimentaire, pas une liste interminable${nb}: pas de régime, pas d’aliment interdit.`,
      description:
        'Aucun régime, aucun aliment interdit, aucune pesée à chaque repas. On part de ce que tu manges déjà et on ne retient que quelques repères généraux d’hygiène alimentaire, ceux qui changent réellement quelque chose dans ton quotidien et qui tiennent même les semaines chargées.',
      includes: [
        'Point sur tes habitudes actuelles, sans jugement',
        'Un petit nombre de repères simples pour composer tes repas',
        'Organisation des repas autour des séances et des jours de repos',
        'Idées de repas rapides et de courses réalistes',
      ],
      forWho:
        'Tu croules sous les conseils contradictoires et tu cherches les quelques repères qui comptent vraiment pour soutenir ton entraînement.',
    },
  ],
};
