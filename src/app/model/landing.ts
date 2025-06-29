export interface landingPage {
    landingPageId: number;
    name:string
    copyrights: string;
    pannerSection: PannerSection;
    faqSection: FAQSection;
    aboutPannerSection: AboutPannerSection;
    goalSection: GoalSection;
    targetGroupSection: TargetGroupSection;
    scopeOfApplicationSection: ScopeOfApplicationSection;
    positiveEffectSection: PositiveEffectSection;
    implementationStepSection: ImplementationStepSection;
    explanatoryEvidenceSection: ExplanatoryEvidenceSection;
    servicesDirectorySection: ServicesDirectorySection;
    surveyFormSection: SurveyFormSection;
    contactUsSection: ContactUsSection;
    sectionsList: SectionsList[]
    isSuccess: boolean;
    errors: Error[];
    code: string;
    message: string;
    languageTypeId: number;
    returnUrl: string;
}

export interface AboutPannerSection {
    aboutPanner: AboutPanner;
    cards: CardSection[];
}

export interface AboutPanner {
    icon: string;
    iconFileName: string;
    imageFileUrl: string;
    iconFileUrl: string;
    cardTemplateID :number
    title?: string;
    subTitle?: string;
    id: number;
    subtitle?: string;
    subTilte?: string;
    tilte?: string;
}



export interface CardSection {
    card: CardCard;
    pannerTitle: string;
    goalTitle: string;
    targetGroupTilte: string;
    scopeOfApplicationTitle: string;
    positiveEffectTitle: string;
    implementationStepTitle: string;
    explanatoryEvidenceTitle: string;
    surveyFormTitle: string;
    servicesDirectoryTitle: string;
}

export interface CardCard {
    title: string;
    subTitle: string;
    icon: string;
    iconFileName: string;
    iconFileUrl: string;
    url: string;
    cardTemplateID: number;
    pannerId: number;
    goalId: number;
    targetGroupId: number;
    scopeOfApplicationId: number;
    positiveEffectId: number;
    implementationStepId: number;
    explanatoryEvidenceId: number;
    surveyFormId: number;
    servicesDirectoryId: number;
    id: number;
}

export interface ContactUsSection {
    contactUs: AboutPanner;
    cards: CardSection[];
    mapCards: MapCardElement[];
}

export interface MapCardElement {
    mapCard: MapCardMapCard;
    contactUsTitle: string;
}

export interface MapCardMapCard {
    longitude: string;
    latitude: string;
    description: string;
    contactUsId: number;
    id: number;
}

export interface Error {
    code: number;
    description: string;
    descriptionAr: string;
    isoCode: string;
}

export interface ExplanatoryEvidenceSection {
    explanatoryEvidence: AboutPanner;
    cards: CardSection[];
}

export interface FAQSection {
    faq: AboutPanner;
    cards: FAQSectionCard[];
}

export interface FAQSectionCard {
    faqCard: FAQCard;
    faqTitle: string;
}

export interface FAQCard {
    question: string;
    answer: string;
    faqId: number;
    id: number;
}

export interface GoalSection {
    goal: AboutPanner;
    cards: CardSection[];
}

export interface ImplementationStepSection {
    implementationStep: AboutPanner;
    cards: CardSection[];
}

export interface PannerSection {
    panner: AboutPanner;
    cards: CardSection[];
}

export interface PositiveEffectSection {
    positiveEffect: AboutPanner;
    cards: CardSection[];
}

export interface ScopeOfApplicationSection {
    scopeOfApplication: AboutPanner;
    cards: CardSection[];
}

export interface ServicesDirectorySection {
    servicesDirectory: AboutPanner;
    cards: CardSection[];
}

export interface SurveyFormSection {
    surveyForm: AboutPanner;
    cards: CardSection[];
}

export interface TargetGroupSection {
    targetGroup: AboutPanner;
    cards: CardSection[];
}







export interface SectionsList {
    title: string
    subtitle: string
    mainImageUrl: string
    iconUrl: string
    templateId: number
    sectionId:number
    addToNavbar:boolean
    cards: MainCard[]
    mapCards: map[]
  }
  
  export interface MainCard {
    card: SubCards
    pannerTitle: string
    goalTitle: string
    targetGroupTilte: string
    scopeOfApplicationTitle: string
    positiveEffectTitle: string
    implementationStepTitle: string
    explanatoryEvidenceTitle: string
    surveyFormTitle: string
    servicesDirectoryTitle: string
  }
  
  export interface SubCards {
    title: string
    icon: string
    iconFileName: string
    iconFileUrl: string
    url: string
    cardTemplateID: number
    cardSectionID: number
    contactUsTypeId:number
    pannerId: number
    goalId: number
    setAsPrimary:boolean
    targetGroupId: number
    scopeOfApplicationId: number
    positiveEffectId: number
    implementationStepId: number
    explanatoryEvidenceId: number
    surveyFormId: number
    servicesDirectoryId: number
    id: number
  }
  
  export interface map {
    mapCard: mapData
    contactUsTitle: string
  }
  
  export interface mapData {
    longitude: string
    latitude: string
    description: string
    contactUsId: number
    id: number
  }