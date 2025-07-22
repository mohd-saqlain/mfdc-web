import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "mr", // fallback if language not found
  lng: "mr", // default language
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {

        home: "Home",
        about: "About Us",
        contact: "Contact",
        rti: "RTI",
        guidlines: "Guidlines",
        activities: "Activities",
        keyprojects: "key Projects",
        schemes1: "Schemes",
        gallery: "Gallery",
        reports: "Reports",
        recuitment: "Recruitment",


        fisheriesFoundation: "Maharashtra Fisheries Development Corporation Limited, Mumbai",

        fisheriesaboutDescription: "To promote the development and growth of deep-sea fishing, the Maharashtra Fisheries Development Corporation was established in 1973. According to the government resolution, mechanized fishing has become the modern method compared to traditional small boat fishing, but the increasing number of mechanized boats poses a risk of overexploitation of fishing areas. Hence, fishing in deep-sea areas with depths greater than 30 fathoms is necessary. While private entrepreneurs are engaged in deep-sea fishing, the government lacked an official body to handle such operations. Therefore, to protect the interests of traditional fishermen, the government approved the establishment of the Maharashtra Fisheries Development Corporation Limited. This corporation is responsible for deep-sea surveys, fish landing, marketing, and export, as well as organizing, coordinating, and supervising fisheries development initiatives. It also works to develop regions with high fisheries potential to ensure that fishermen benefit directly. In recent years, the corporation has undergone significant changes, taking up projects like building fishing harbors and fish landing centers along the coast, managing fisheries in large reservoirs, and promoting cage fish farming to encourage entrepreneurship among those interested in aquaculture.",
        mfdcAddress: "3rd Floor, N.K.M. International House, ",
        mfdcAddress1: "Babubhai M. Chinai Road, Mumbai - 400 020",
        latestnewst: "Latest News",
        latestnews1: "Notice regarding upcoming fisheries project",
        latestnews2: "Government subsidy updates for fish farmers",
        latestnews3: "New deep-sea fishing guidelines announced",
        connectWithUs: "Connect With Us",

        // directors name
        person1Name1: "Hon. Shri Niteshji Rane",
        person1Designation1: "Minister   <br/>Fisheries and Ports, Government of Maharashtra ",

        person2Name1: "Dr. Ramaswamy N. (I.A.S.)",
        person2Designation1: " Secretary (Fisheries)<br/> Ministry, Government of Maharashtra, Mumbai",

        person3Name1: "Shri Avinash Pathak (I.A.S.)",
        person3Designation1: "Managing Director <br/>Maharashtra  Fisheries Development Corporation",



        // deparments
        department1: "Head Office",
        department2: "Nagpur Division",
        department3: " sasson dock Division",
        department4: "Sassoon Dock",

        department5: "Parallel Pay Scale Employees",
        department6: "Through External Agency",
        /// quick links

        quicklinesheading: "Quick Links",
        quickLink1Title: " Pradhan Mantri Matsya Sampada Yojana",
        quickLink2Title: "Fisheries Department Government of Maharashtra, India",
        quickLink3Title: "National Fisheries Development Boards",
        quickLink4Title: "SagarMala - Ministry of Shipping, GOI",


        // deparments
        department1: "Head Office",
        department2: "Nagpur Division",
        department3: " sasson dock Division",
        departments: "Department",


        //nfdc_projects

        nfdc_projects: "Projects",
        project1: "CSR Projects",
        project2: "PMMSY Projects",
        project3: "Ongoing Projects",
        project4: "FMPIS Projects",

        peopleData: "Board of Directors",

        vision: "Vision",
        mission: "Mission",
        goals: "Goals",
        registernow: "Register Now",

        visionheading: "Our vision is to foster sustainable fisheries development across the coastal and inland regions of Maharashtra.",
        visionpara1: "We aim to transform the fisheries sector into a self-reliant, technologically advanced, and economically vibrant industry...",
        visionpara2: "Our focus remains on building resilient ecosystems, modernizing fishing infrastructure...",


        missionheading: "Our mission is to empower the fisheries sector through strategic planning, innovation, and inclusive growth.",
        missionpara1: "The Maharashtra Fisheries Development Corporation is dedicated to the development of deep-sea fishing and the socio-economic empowerment of fishermen. To support this, infrastructure such as ice plants, cold storage facilities, and processing centers are established.",
        missionpara2: "The Corporation provides fishermen with nets, boats, marine engines, vehicles, and other necessary equipment. The primary objective is to increase the production of traditional fishermen and safeguard their interests.",


        goalheading: "Our goals are strategically aligned to transform the fisheries ecosystem in Maharashtra.",
        goals1: ["Promote eco-friendly fishing practices and preserve marine biodiversity",
          "Increase fish production through scientific and sustainable methods",
          "Develop cold chains, processing units, and modern harbors",
          "Provide financial aid and insurance to fisher families",
          "Boost exports by complying with global quality standards",
          "Encourage women and youth participation in aquaculture",
          "Implement digital tools for monitoring and governance"],

        goals2: "These goals aim to ensure food security, economic prosperity, and long-term sustainability for all stakeholders involved.",


        introduction: "Introduction",
        who_we_are: "Who We Are",
        what_we_do: "What We Do",
        our_mission: "Our Mission",
        the_story: "The Story",
        objectives: "Objectives",
        our_values: "Our Values",
        future_vision: "Future Vision",

        //footer

        fisheriesCorporation:
          "Maharashtra Fisheries Development ",
        committedEmpowerment: "Empowering Fisheries, Enriching Livelihoods",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        home: "Home",
        contactUs: "Contact Us",
        tender: "Tender",
        privacyPolicy: "Privacy Policy",
        fisherieslocation: " Corporation,Mumbai, Maharashtra",
        accessibleGuide: "Accessible Guide",

        //schemes
        schemes: "SERVICES & SCHEMES",
        schemetitle1: "Pradhan Mantri Matsya Sampada Yojana",
        schemetitle2: "Group Accident Insurance Scheme under PMMSY",
        schemetitle3: "Kisan Credit Cards (KCC)",
        schemetitle4: "Pradhan Mantri Matsya Sampada Yojana",
        schemetitle5: "Pradhan Mantri Matsya Sampada Yojana",
        viewmore: "View More",

        pmmsyguidlines: "PMMSY Guidlines",
        fidfguidlines: "FIDF Guidlines",
        generalguidlines: "General Guidlines",


        //RTi

        RtiHeadlines: "Right to Information",
        rti1: "Proactive Disclosure on Website",
        rti2: "Disposal of Online RTI/Appeal: The online RTI filed by an applicant directly to Department of Fisheries will first come in the Nodal Account of DOF which is managed by RTI Cell.",
        rti3: "Disposal of Offline RTI/Appeal",
        rti4: "RTI Cell is responsible for the timely submission of RTI Quarterly Returns to Central Information Commission.",
        rti5: "RTI Cell is responsible for the circulation of instructions relating to RTI issued by CIC/DoPT among all CPIOs/FAAs in Department of Fisheries as well as among all Public Authorities under Department of Fisheries by post/email.",
        rti6: "RTI Cell is responsible to issue User ID and Password to every officer who joins as CPIO or First Appellate Authority in Department of Fisheries.",
        rti7: "RTI Cell is responsible to see whether there are any pending RTI/Appeals inside the account of any CPIO/FAA for a long time.",
        titlerti: "Title",
        filerti: "Download File",

        srno: "SR.NO.",
        name: "Officers name ",
        designation: "Designation",

        //  main division

        officer1: "Mr. Kishor V. Salgaonkar",
        designation1: "Administrative Officer",

        officer2: "Mr. Ravasahib Bobade",
        designation2: "Executive Engineer",

        officer3: "Mrs. Shweta More",
        designation3: "Senior Accounts Assistant",

        officer4: "Mr. Shivam Sonawane",
        designation4: "Assistant Fisheries Development Officer",

        officer5: "Mr. Pranav Bandkar",
        designation5: "Assistant Fisheries Development Officer",

        officer6: "Mr. Rushikesh Palve",
        designation6: "Assistant Fisheries Development Officer",

        officer7: "Mr. Vinay Gundaye",
        designation7: "Junior Engineer",

        officer8: "Mr. Neeraj Shinde",
        designation8: "Junior Engineer",

        officer9: "Mr. Rohan Raut",
        designation9: "Junior Accounts Assistant",

        officer10: "Mr. Omkar Bhuravane",
        designation10: "Junior Clerk",

        officer11: "Mr. Sachin Katkade",
        designation11: "Junior Clerk",

        officer12: "Mrs. Tanvi Sawant",
        designation12: "Junior Clerk",

        officer13: "Mrs. Rohini Harare",
        designation13: "Junior Clerk",

        officer14: "Mr. Prakash S. Katkade",
        designation14: "Driver",

        officer15: "Mr. Sameer Surve",
        designation15: "Peon",

        officer16: "Mr. Aniket Tamboli",
        designation16: "Peon",

        officer17: "Mrs. Sarita Kumbhar",
        designation17: "Peon",

        //  sasson dock division

        officer18: "Mr. Mohan Dattaram Gaikwad",
        designation18: "Training Mechanic",

        officer19: "Mr. Shivgovind R. Pande",
        designation19: "Training Mechanic",

        officer20: "Mr. Shyamsundar Damodar Pawar",
        designation20: "Machinery Operator",

        officer21: "Mr. Kondiba Yashwant Chattar",
        designation21: "Machinery Operator",


        // nagpur division

        officer22: "Mr. Yogesh Kathane",
        designation22: "Assistant Fisheries Development Officer",

        officer23: "Mr. Dinesh Shamrao Dhoke",
        designation23: "Junior Clerk-Typist",

        officer24: "Mrs. Jayashri Kevate",
        designation24: "Junior Accounts Assistant",

        officer25: "Mr. Mohd. Abdul Jabbar Mohd. Sardar",
        designation25: "Driver",

        officer26: "Mr. Shaikh Irfan",
        designation26: "Peon",

        officer27: "Mr. Ashok Narayan Wahul",
        designation27: "Peon",




        contactinfo: "Contact Information",
        corpName: "Maharashtra Fisheries Development Corporation Ltd.",
        address: "3rd Floor, N.K.M. International House, Babu Bhai M. Chinoy Road, Behind LIC Yogakshema, Mumbai - 400 020.",
        email: "Email: mfdc73@gmail.com, mfdc@rediffmail.com",
        phone: "Phone: 022-35114917",

        contactinfo1: "Contact Information",
        corpName1: "Maharashtra Fisheries Development Corporation Ltd.",
        address1: "Sasson dock, colaba, Mumbai 400005",

        corpName2: "Maharashtra Fisheries Development Corporation Ltd.",
        address2: "Administrative Building No. 2, 5th Floor, A Wing, Civil Lines, Nagpur 440 001.",
        email2: "Email: mfdcnagpur@rediffmail.com",
        phone2: "Phone: 0712-2566106",

        // contact
        message: "Send us a message",
        submit: "Submit",

        //guidlines

        guideline1: "1.Press release by PMMSY",
        guideline2: "2.PMMSY Framework",
        guideline3: "3. Annexure Framework",
        guideline4: "4.PMMSY Operational Guidelines (English)",
        guideline5: "5. PMMSY Operational Guidelines (Hindi)",
        guideline6: "6. Administrative Expenses Guidelines (English)",
        guideline7: "7. Administrative Expenses Guidelines (Hindi)",
        guideline8: "8. PMMSY Entrepreneurs Models (English)",
        guideline9: "9. PMMSY Entrepreneurs Models (Hindi)",
        guideline10: "10. Revisions in the Operational Guidelines of the Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
        guideline11: "11. Beneficiary oriented sub-components of Centrally Sponsored Scheme of PMMSY (English)",
        guideline12: "12. Beneficiary oriented sub-components of Centrally Sponsored Scheme of PMMSY (Hindi)",
        guideline13: "13. FFPO Guidelines",
        guideline14: "14. Guidelines for Implementation of Single Nodal Agencies",
        guideline15: "15. Initiatives under PMMSY during FY 2020-21",
        guideline16: "16. PMMSY Reform Booklet (English)",
        guideline17: "17. PMMSY Reform Booklet (Hindi)",
        guideline18: "18. PMMSY Training Guidelines",
        guideline19: "19. Revision in the Operational Guidelines of PMMSY – 2021",
        guideline20: "20. Addendum to the Operational Guidelines of PMMSY – March, 2022",
        guideline21: "21. Administrative Approval for implementation of PMMSY 2020-21",
        guideline22: "22. Administrative Approval for implementation of PMMSY 2021-22",
        guideline23: "23. Administrative Approval for implementation of PMMSY 2022-23",
        guideline24: "24. PMMSY Reform Booklet - 2022 (English)",
        guideline25: "25. Amendments to Operational Guidelines of PMMSY – 12th Dec 2022",
        fidfguidlines1: "1. FIDF Guidlines",


        //schemes

        pmmsyschemes: "PMMSY Schemes",
        gaisschemes: "GAIS Schemes",
        fidfschemes: "FIDF Schemes",
        bluerschemes: "Blue Revolution Schemes",

        about_title: "About MFDB",
        about_description: "Maharashtra Fisheries Development Corporation was established in 1973 and has been actively working towards the development of deep-sea fishing and the welfare of fishermen. Due to the increasing use of mechanized fishing, the corporation was established by the government to utilize deep-sea fishing opportunities and to protect traditional fishermen. The corporation is actively involved in developing infrastructure for fisheries, managing large water reservoirs, and implementing fishery conservation projects.",
        instructions_title: "	Important Notice",
        instructions1: "Note for Photographers:Under the Maharashtra Fisheries Development Corporation Ltd., a camp was organized for 189 fisherfolk in Yavatmal district to assist them in obtaining GIAS, e-Shram, and Kisan Credit Cards. Additionally, awareness programs related to fisheries were conducted through camps in the villages of Jankar Kopra (Tal. Babhulgaon), Kolhi-2 rehabilitation village (Tal. Babhulgaon), and Sawanga (Tal. Digras), Yavatmal district.",
        activities_heading: "Activities for Welfare and Support: GIAS, E-Shram, and KCC Camps",


        //schemes
        gais_headline: "Group Accident Insurance scheme (GAIS)",
        pmmsy_heading: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
        gais_pmmsy: "Group Accident Insurance Scheme (GAIS) - PMMSY(English)",
        gais_pmmsy1:"Group Accident Insurance Scheme (GAIS) - PMMSY(Hindi)",


      }
    },

    mr: {
      translation: {

        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
        rti: "आरटीआय",
        guidlines: "मार्गदर्शक तत्त्वे",
        activities: "उपक्रम",
        keyprojects: "प्रमुख प्रकल्प",
        schemes1: "योजना",
        gallery: "गॅलरी",
        reports: "अहवाल",
        recuitment: "पद-भरती ",

        fisheriesFoundation: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित, मुंबई",
        fisheriesaboutDescription: "खोल समुद्रातील मत्स्यव्यवसायाचा विकास व्हावा आणि मत्स्यव्यवसायात वृद्धी व्हावी यासाठी सन १९७३ मध्ये महाराष्ट्र मत्स्योद्योग विकास महामंडळाची स्थापना करण्यात आली. शासन निर्णयाच्या प्रस्तावनेनुसार, यांत्रिक मासेमारी ही आधुनिक पद्धत म्हणून स्वीकारली गेली असून यांत्रिक नौकांच्या वाढत्या संख्येमुळे मासेमारी क्षेत्रांचे अतिशोषण होण्याचा धोका आहे. त्यामुळे ३० फॅदमपेक्षा जास्त खोली असलेल्या खोल समुद्रात मासेमारी करणे गरजेचे ठरते. सध्या खाजगी उद्योजकांकडून खोल समुद्रात मासेमारी केली जात असली, तरी शासनाकडे अशा प्रकारचे कार्य हाताळणारा कोणताही अंगीकृत उपक्रम नसल्याने, पारंपरिक मच्छीमारांच्या हितासाठी शासनाने ‘महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित’ या नावाने महामंडळ स्थापन केले. हे महामंडळ खोल समुद्राचे सर्वेक्षण, माशांचे लँडिंग, विपणन आणि निर्यात यासह विविध मत्स्यविकास उपक्रमांचे संघटन, समन्वय व पर्यवेक्षण करते. मत्स्यविकासासाठी सक्षम असलेल्या भागांचा विकास करून मच्छीमारांना त्याचा थेट लाभ मिळावा, यासाठीही महामंडळ प्रयत्नशील आहे. गेल्या काही वर्षांत महामंडळाच्या कारभारात आमूलाग्र बदल घडले असून मासेमारी बंदरे, फिश लँडिंग सेंटर उभारण्यासह जलाशयांचे मासेमारी व्यवस्थापन व पिंजरा पद्धतीने मत्स्यसंवर्धनाचे प्रकल्प राबवले जात आहेत. त्यामुळे मत्स्यशेतीसाठी इच्छुक व्यक्तींमध्ये उद्योजकता निर्माण होण्यास हातभार लागतो आहे.",
        mfdcAddress: "3 रा मजला, एन.के.एम. इंटरनॅशनल हाऊस, ",
        mfdcAddress1: "बाबुभाई एम. चिनॉय मार्ग, मुंबई- 400 020",

        latestnewst: "ताज्या घडामोडी",
        latestnews1: "मत्स्य प्रकल्पांबाबत लवकरच सूचना जाहीर होणार",
        latestnews2: "मत्स्यशेतीसाठी शासनाच्या अनुदानात सुधारणा",
        latestnews3: "खोल समुद्रातील मासेमारीसाठी नवीन मार्गदर्शक तत्त्वे जारी",
        connectWithUs: "आमच्याशी संपर्क साधा",


        // deparments
        department1: "मुख्य कार्यालय ",
        department2: "नागपूर विभाग",

        department3: "ससून डॉक विभाग ",

        department4: "ससुन गोदी ",

        department5: "समांतर वेतन श्रेणी कर्मचारी",
        department6: "बाहययंत्रणेद्वारे ",


        quicklinesheading: "जलद दुवे",
        quickLink1Title: "प्रधानमंत्री मत्स्यसंपदा योजना डॅशबोर्ड",
        quickLink2Title: "मत्स्यव्यवसाय विभाग महाराष्ट्र शासन, भारत",
        quickLink3Title: "राष्ट्रीय मात्स्यिकी विकास बोर्ड",
        quickLink4Title: "सागरमाला - भारत सरकारचे नौवहन मंत्रालय",

        // deparments
        department1: "मुख्य कार्यालय ",
        department2: "नागपूर विभाग",

        department3: "ससून गोदी विभाग ",
        departments: "विभाग",
        registernow: " नोंदणी करा",


        // directors name
        person1Name1: "मा.ना.श्री. नितेशजी राणे  ",
        person1Designation1: " मंत्री   <br/>मत्स्यव्यवसाय व बंदरे महाराष्ट्र राज्य, मुंबई",
        person2Name1: "डॉ. रामास्वामी एन. (भा. प्र. से.)",
        person2Designation1: " सचिव (पदुम) <br/>मंत्रालय,महाराष्ट्र राज्य, मुंबई",
        person3Name1: "श्री. अविनाश पाठक (भा. प्र. से.)",
        person3Designation1: "व्यवस्थापकीय संचालक <br/>महाराष्ट्र मत्स्योद्योग विकास महामंडळ",




        nfdc_projects: "प्रकल्प",
        project1: "कॉर्पोरेट सामाजिक जबाबदारी (CSR) प्रकल्प ",
        project2: "PMMSY प्रकल्प",
        project3: "Ongoing प्रकल्प",
        project4: "FMPIS प्रकल्प",

        pmmsyguidlines: "पीएमएमएसवाय मार्गदर्शक तत्वे",
        fidfguidlines: "एफआयडीएफ मार्गदर्शक तत्वे",
        generalguidlines: "सामान्य मार्गदर्शक तत्त्वे",


        peopleData: "मंडळाचे संचालक",


        vision: "दृष्टीकोन",
        mission: "मिशन",
        goals: "उद्दिष्टे",

        visionheading: "महाराष्ट्रातील किनारी व अंतर्गत भागांमध्ये शाश्वत मत्स्यव्यवसाय विकास साधणे हे आमचे उद्दिष्ट आहे.",
        visionpara1: "मत्स्यव्यवसाय क्षेत्राला स्वयंपूर्ण, तंत्रज्ञानाधारित व आर्थिकदृष्ट्या सक्षम बनवणे हा आमचा उद्देश आहे. महाराष्ट्र राज्याच्या सामाजिक व आर्थिक विकासात मत्स्यव्यवसाय विभागाचा महत्वाचा वाटा आहे. आर्थिकदृष्टया मागासलेल्या वर्गातील लोकांकरिता रोजगार मिळण्यासाठी मत्स्यव्यवसाय क्षेत्र हा महत्वाचा स्त्रोत आहे. विभागाचा उददेश आर्थिक मागासवर्गास मदत करणे आणि मत्स्यव्यवसायाच्या विविध क्षेत्रात आधुनिक प्रामाणित तंत्रज्ञान आत्मसात करुन मत्स्यव्यवसायाचा विकास करणे हा विभागाचा उददेश आहे.",
        visionpara2: "सशक्त परिसंस्था उभारणे, मासेमारी पायाभूत सुविधा आधुनिक करणे. मत्स्यव्यवसाय क्षेत्रामुंळे आर्थिक मागासवर्गीयांस रोजगार, स्वस्त व पोषक अन्न, उपलब्ध होते तसेच देशाला परकीय चलन प्राप्त होते. विभागाने विविध साधनसंपत्ती पध्दती, संधी, संभाव्य धोके इत्यादी बाबीं लक्षात घेऊन भविष्यासाठी धोरण निश्चित केले आहे. विभागाचे धोरण पुढील प्रमाणे आहे.",

        missionheading: "रणनीती, नावीन्यपूर्णता आणि समावेशी विकासाद्वारे मत्स्यव्यवसाय क्षेत्र सक्षम बनवणे हे आमचे ध्येय आहे.",
        missionpara1: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ खोल समुद्रातील मत्स्य व्यवसायाचा विकास आणि मच्छीमारांचे आर्थिक-सामाजिक सशक्तीकरण यासाठी कार्यरत आहे. यासाठी बर्फ कारखाने, कोल्ड स्टोरेज व प्रक्रिया केंद्र यांसारख्या पायाभूत सुविधा उभारल्या जातात.",
        missionpara2: "महामंडळाकडून मच्छीमारांना जाळी, बोटी, सागरी इंजिन्स, वाहने व इतर साधनसामग्री पुरवली जाते. पारंपरिक मच्छीमार बांधवांचे उत्पादन वाढवणे आणि त्यांचे हित जपणे हे यामागचे प्रमुख उद्दिष्ट आहे.",


        goalheading: "Our goals are strategically aligned to transform the fisheries ecosystem in Maharashtra.",
        goals1: ["Promote eco-friendly fishing practices and preserve marine biodiversity",
          "Increase fish production through scientific and sustainable methods",
          "Develop cold chains, processing units, and modern harbors",
          "Provide financial aid and insurance to fisher families",
          "Boost exports by complying with global quality standards",
          "Encourage women and youth participation in aquaculture",
          "Implement digital tools for monitoring and governance"],

        goals2: "These goals aim to ensure food security, economic prosperity, and long-term sustainability for all stakeholders involved.",

        introduction: "परिचय",
        who_we_are: "आपण कोण आहोत",
        what_we_do: "आम्ही काय करतो",
        our_mission: "आमचे ध्येय",
        the_story: "कथा",
        objectives: "उद्दिष्टे",
        our_values: "आमच्या मूल्यांचा",
        future_vision: "भविष्यातील दृष्टिकोन",

        intro_desc: "खोल समुद्रातील मत्स्यव्यवसायाचा विकास व्हावा आणि मत्स्यव्यवसायात वृद्धी व्हावी यासाठी सन १९७३ मध्ये महाराष्ट्र मत्स्योद्योग विकास महामंडळाची स्थापना करण्यात आली. शासन निर्णयाच्या प्रस्तावनेत नमुद केल्यानुसार-“मत्स्योत्पादन वाढीसाठी छोटी नौका/होडी द्वारे होणाऱ्या मासेमारीच्या तुलनेत यांत्रिक नौकेने मासेमारी करणे ही आता आधुनिक पद्धत म्हणून स्विकारली गेली आहे. यांत्रिक मासेमारी नौकांच्या संख्येत होणाऱ्या वाढीमुळे मासेमारी क्षेत्रांचे अतिशोषण होण्याचा धोका आहे. परिणामी मासेमारी कमी होऊन आणि भविष्यात यांत्रिक नौकांद्वारे केलेली मासेमारी अव्यवहारीक ठरण्याचा धोका आहे. या बाबीचा विचार करता खोल समुद्रात ३० फॅदम पेक्षा जास्त खोली असलेल्या भागात मासेमारी करणे गरजेचे आहे. खाजगी उद्योजकांकडून खोल समुद्रात मासेमारी केली जात आहे. सदर काम हाताळू शकेल अशा स्वरुपाचा शासनाचा कोणताही अंगीकृत उपक्रम नाही त्यामुळे शासन पुरस्कृत महामंडळांमार्फत खोल समुद्रातील मासेमारी प्रकल्प हाती घेऊन पारंपरिक मच्छीमारांच्या हिताचे रक्षण करणे आवश्यक आहे. शासनाने काळजीपूर्वक विचार करून मत्स्योद्योग विकास महामंडळ स्थापन करण्यास मान्यता दिली असून त्याचे नाव ‘महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित’ असावे. महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित यांचे कार्य हे खोल समुद्राचे सर्वेक्षण, माशांचे लँडिंग, विपणन आणि निर्यात यासह मत्स्य विकास उपक्रमांचे संघटन, समन्वय आणि पर्यवेक्षणाशी संबंधित आहे. ज्या भागात मत्स्यविकासाची क्षमता आहे, अशा भागांचा विकास करून मत्स्यविकासाचा लाभ मच्छीमारांना मिळावा, याचीही काळजी घेणे गरजेचे आहे.गेल्या काही वर्षांत महामंडळाच्या कारभारात आमूलाग्र बदल झाला आहे. महामंडळाकडून मत्सस्यव्यवसायासाठीच्या पायाभुत सुविधा जसे सागरी क्षेत्रात मासेमारी बंदरे आणि फिश लँडिंग सेंटर बांधण्याचे काम हाती घेण्यात आले आहे. तसेच मत्स्यव्यवसायाच्या विकासासाठी राज्यातील मोठ्या जलाशयांचे मासेमारी व्यवस्थापन केले जाते. मोठ्या जलाशयांमध्ये पिंजरा पद्धतीने मत्स्यसंवर्धनाच्या माध्यमातून मत्स्यशेतीची आवड असणाऱ्या व्यक्तींमध्ये उद्योजकता निर्माण करण्याचा प्रयत्न महामंडळामार्फत करण्यात येत आहे.",
        who_we_are_desc1: "आम्ही महाराष्ट्र शासनाच्या अधिपत्याखालील एक महामंडळ आहोत, जे खोल समुद्रातील मत्स्यसंपत्तीचा शाश्वत वापर आणि मच्छीमार समाजाच्या समृद्धीसाठी कार्य करतो. आम्ही आधुनिक तंत्रज्ञानाचा उपयोग करून मत्स्यव्यवसायाचा सर्वांगीण विकास साधतो.",

        //footer
        fisheriesCorporation: "महाराष्ट्र मत्स्यव्यवसाय विकास महामंडळ,",
        committedEmpowerment: "मत्स्यव्यवसाय सक्षम करणे, उपजीविका समृद्ध करणे",
        quickLinks: "जलद लिंक्स",


        aboutUs: "आमच्याबद्दल",
        home: "मुख्यपृष्ठ",
        contactUs: "संपर्क करा",
        tender: "व्यवसाय निविदा",
        privacyPolicy: "गोपनीयता धोरण",

        fisherieslocation: " मुंबई, महाराष्ट्र",
        accessibleGuide: "सुविधायुक्त मार्गदर्शक",

        //schemes
        schemes: "सेवा आणि योजना",
        schemetitle1: "प्रधानमंत्री मत्स्य संपदा योजना",
        schemetitle2: "पीएमएमएसवाय अंतर्गत गट अपघात विमा योजना",
        schemetitle3: "किसान क्रेडिट कार्ड (केसीसी)",
        schemetitle4: "पीएमएमएसवाय अंतर्गत गट अपघात विमा योजना",
        schemetitle5: "पीएमएमएसवाय अंतर्गत गट अपघात विमा योजना",
        viewmore: "अधिक पहा",

        //RTi

        RtiHeadlines: "माहितीचा अधिकार",
        rti1: "वेबसाइटवर सक्रिय खुलासा",
        rti2: "ऑनलाइन आरटीआय/अपीलचा निपटारा: अर्जदाराने थेट मत्स्यव्यवसाय विभागाकडे दाखल केलेला ऑनलाइन आरटीआय प्रथम आरटीआय सेलद्वारे व्यवस्थापित केलेल्या डीओएफच्या नोडल खात्यात येईल.",
        rti3: "ऑफलाइन आरटीआय/अपीलचा निपटारा",
        rti4: "केंद्रीय माहिती आयोगाकडे आरटीआय तिमाही विवरणपत्रे वेळेवर सादर करण्याची जबाबदारी आरटीआय सेलची आहे.",
        rti5: "मत्स्यव्यवसाय विभागातील सर्व सीपीआयओ/एफएए तसेच मत्स्यव्यवसाय विभागाच्या अंतर्गत येणाऱ्या सर्व सार्वजनिक प्राधिकरणांमध्ये सीआयसी/डीओपीटीने जारी केलेल्या आरटीआयशी संबंधित सूचना पोस्ट/ईमेलद्वारे प्रसारित करण्याची जबाबदारी आरटीआय सेलची आहे.",
        rti6: "मत्स्यव्यवसाय विभागात सीपीआयओ किंवा प्रथम अपीलीय अधिकारी म्हणून सामील होणाऱ्या प्रत्येक अधिकाऱ्याला यूजर आयडी आणि पासवर्ड जारी करण्याची जबाबदारी आरटीआय सेलची आहे.",
        rti7: "कोणत्याही सीपीआयओ/एफएएच्या खात्यात दीर्घकाळापासून कोणतेही प्रलंबित आरटीआय/अपील आहेत का हे पाहण्याची जबाबदारी आरटीआय सेलची आहे.",

        titlerti: "शीर्षक",
        filerti: "फाइल डाउनलोड करा",

        srno: "अनुक्रमांक",
        name: "अधिकाऱ्यांचे नाव",
        designation: "पद",

        // main division

        officer1: "श्री. किशोर साळगांवकर",
        designation1: "प्रशासकीय अधिकारी",

        officer2: "श्री. रावसाहेब बोबडे",
        designation2: "कार्यकारी अभियंता",

        officer3: "सौ. श्वेता मोरे",
        designation3: "वरिष्ठ लेखा सहाय्यक",

        officer4: "श्री. शिवम सोनवणे",
        designation4: "सहाय्यक मत्स्यव्यवसाय विकास अधिकारी",

        officer5: "श्री. प्रणव बांदकर",
        designation5: "सहाय्यक मत्स्यव्यवसाय विकास अधिकारी",

        officer6: "श्री. ऋषिकेश पालवे",
        designation6: "सहाय्यक मत्स्यव्यवसाय विकास अधिकारी",

        officer7: "श्री. विनय गुंडये",
        designation7: "कनिष्ठ अभियंता",

        officer8: "श्री. नीरज शिंदे",
        designation8: "कनिष्ठ अभियंता",

        officer9: "श्री. रोहन राऊत",
        designation9: "कनिष्ठ लेखा सहाय्यक",

        officer10: "श्री. ओंकार भुरवणे",
        designation10: "कनिष्ठ लिपिक",

        officer11: "श्री. सचिन कातकडे",
        designation11: "कनिष्ठ लिपिक",

        officer12: "सौ. तन्वी सावंत",
        designation12: "कनिष्ठ लिपिक",

        officer13: "सौ. रोहिणी हरारे",
        designation13: "कनिष्ठ लिपिक",

        officer14: "श्री. प्रकाश एस. कातकडे",
        designation14: "वाहनचालक",

        officer15: "श्री. समीर सुर्वे",
        designation15: "शिपाई",

        officer16: "श्री. अनिकेत तांबोळी",
        designation16: "शिपाई",

        officer17: "श्रीमती. सरिता कुंभार",
        designation17: "शिपाई",

        //  sasson dock division

        officer18: "श्री. मोहन दत्ताराम गायकवाड",
        designation18: "प्रशितन यांत्रिक",

        officer19: "श्री. शिवगोविंद रा. पांडे",
        designation19: "प्रशितन यांत्रिक",

        officer20: "श्री. श्यामसुंदर दामोदर पवार",
        designation20: "यंत्र सामग्री चालक",

        officer21: "श्री. कोंडीबा यशवंत चत्तर",
        designation21: "यंत्र सामग्री चालक",

        //   nagpur divison

        officer22: "श्री. योगेश कठाणे",
        designation22: "सहाय्यक मत्स्यव्यवसाय विकास अधिकारी",

        officer23: "श्री. दिनेश शामराव ढोके",
        designation23: "कनिष्ठ लिपिक-टंकलेखक",

        officer24: "सौ. जयश्री केवटे",
        designation24: "कनिष्ठ लेखा सहाय्यक",

        officer25: "श्री. मो. अब्दुल जब्बार मो. सरदार",
        designation25: "वाहनचालक",

        officer26: "श्री. शेख इरफान",
        designation26: "शिपाई",

        officer27: "श्री. अशोक नारायण वाहूळ",
        designation27: "शिपाई",






        contactinfo: "संपर्क माहिती",
        corpName: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित",
        address: "३ रा मजला, एन. के. एम. इंटरनॅशनल हाऊस, बाबुभाई एम. चिनॉय मार्ग, एल. आय. सी. योगक्षेम च्या मागे, मुंबई - ४०० ०२०.",
        email: "ई-मेल: mfdc73@gmail.com, mfdc@rediffmail.com",
        phone: "दुरध्वनी क्रमांक: ०२२-३५११४९१७",

        contactinfo1: "संपर्क माहिती",
        corpName1: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित,",
        address1: "ससून डॉक, कुलाबा, मुंबई – ४००००५",


        corpName2: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित",
        address2: "प्रशासकीय ईमारत क्र. 2, पाचवा माळा, ए विंग, सिव्हिल लाईन, नागपूर  440 001.",
        email2: "ई-मेल: mfdcnagpur@rediffmail.com",
        phone2: "दुरध्वनी क्रमांक :- 0712-2566106 ",



        // contact
        message: "आम्हाला संदेश पाठवा",
        submit: "सबमिट करा",

        //guidlines


        guideline1: "1. पीएमएमएसवाय द्वारे प्रसिद्धीपत्रक",
        guideline2: "2. पीएमएमएसवाय आराखडा",
        guideline3: "3. परिशिष्ट आराखडा",
        guideline4: "4. पीएमएमएसवाय कार्यान्वयन मार्गदर्शक तत्त्वे (इंग्रजी)",
        guideline5: "5. पीएमएमएसवाय कार्यान्वयन मार्गदर्शक तत्त्वे (हिंदी)",
        guideline6: "6. प्रशासकीय खर्च मार्गदर्शक तत्त्वे (इंग्रजी)",
        guideline7: "7. प्रशासकीय खर्च मार्गदर्शक तत्त्वे (हिंदी)",
        guideline8: "8. पीएमएमएसवाय उद्योजक मॉडेल्स (इंग्रजी)",
        guideline9: "9. पीएमएमएसवाय उद्योजक मॉडेल्स (हिंदी)",
        guideline10: "10. प्रधानमंत्री मत्स्य संपदा योजनेच्या कार्यान्वयन मार्गदर्शक तत्त्वांमध्ये सुधारणा",
        guideline11: "11. पीएमएमएसवायच्या केंद्र पुरस्कृत योजनेचे लाभार्थी-केंद्रित उपघटक (इंग्रजी)",
        guideline12: "12. पीएमएमएसवायच्या केंद्र पुरस्कृत योजनेचे लाभार्थी-केंद्रित उपघटक (हिंदी)",
        guideline13: "13. एफएफपीओ मार्गदर्शक तत्त्वे",
        guideline14: "14. सिंगल नोडल एजन्सी अंमलबजावणीसाठी मार्गदर्शक तत्त्वे",
        guideline15: "15. वित्तीय वर्ष 2020-21 मध्ये पीएमएमएसवाय अंतर्गत घेतलेले उपक्रम",
        guideline16: "16. पीएमएमएसवाय सुधारणा पुस्तिका (इंग्रजी)",
        guideline17: "17. पीएमएमएसवाय सुधारणा पुस्तिका (हिंदी)",
        guideline18: "18. पीएमएमएसवाय प्रशिक्षण मार्गदर्शक तत्त्वे",
        guideline19: "19. प्रधानमंत्री मत्स्य संपदा योजनेच्या कार्यान्वयन मार्गदर्शक तत्त्वांमध्ये सुधारणा_2021",
        guideline20: "20. पीएमएमएसवाय कार्यान्वयन मार्गदर्शक तत्त्वांचे परिशिष्ट – मार्च, 2022",
        guideline21: "21. पीएमएमएसवाय अंमलबजावणीसाठी प्रशासकीय मान्यता 2020-21",
        guideline22: "22. पीएमएमएसवाय अंमलबजावणीसाठी प्रशासकीय मान्यता 2021-22",
        guideline23: "23. पीएमएमएसवाय अंमलबजावणीसाठी प्रशासकीय मान्यता 2022-23",
        guideline24: "24. पीएमएमएसवाय सुधारणा पुस्तिका - 2022 (इंग्रजी)",
        guideline25: "25. प्रधानमंत्री मत्स्य संपदा योजनेच्या कार्यान्वयन मार्गदर्शक तत्त्वांमध्ये दुरुस्ती_12 डिसेंबर 2022",


        fidfguidlines1: "1. FIDF मार्गदर्शक तत्वे",


        //schemes
        pmmsyschemes: "पीएमएमएसवाय योजना",
        gaisschemes: "जीएआयएस योजना",
        fidfschemes: "एफआयडीएफ योजना",
        bluerschemes: "ब्लू रिव्होल्यूशन योजना",

        about_title: "महाराष्ट्र मत्स्यव्यवसाय विकास महामंडळाबद्दल",
        about_description: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ सन १९७३ मध्ये स्थापन करण्यात आले असून खोल समुद्रातील मत्स्यव्यवसायाचा विकास व मच्छीमारांचे हित साधण्यासाठी कार्यरत आहे. यांत्रिक मासेमारीच्या वाढत्या वापरामुळे खोल समुद्रातील मत्स्य संधींचा उपयोग होण्यासाठी आणि पारंपरिक मच्छीमारांचे संरक्षण करण्यासाठी हे महामंडळ शासनातर्फे स्थापन करण्यात आले. महामंडळ मासेमारीसाठी पायाभूत सुविधा उभारणे, मोठ्या जलाशयांचे व्यवस्थापन व मत्स्यसंवर्धन प्रकल्प राबविणे यामध्ये सक्रिय आहे.",
        instructions_title: "	महत्वाची सूचना",
        instructions1: "Note For photographers: महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्या. अंतर्गत यवतमाळ जिल्ह्यातील १८९ मच्छिमार बांधवांन चे शिबिर घेऊन GIAS , इ-श्रम व किसान क्रेडिट कार्ड काढून देण्यास सहाय्य करण्यात आले. तसेच जानकर कोपरा ता.बाभुळगाव, कोल्ही -२ पुनर्वसन गाव ता. बाभुळगाव, सावंगा ता. डिग्रस जिल्हा यवतमाळ येथील मच्छिमार बांधवांनमध्ये शिबिर घेऊन मत्स्य व्यवसाय विषयक जागरूकता करण्यात आली",

        activities_heading: "कल्याण व सहाय्य उपक्रम: GIAS, ई-श्रम, व KCC शिबिरे",

        //schemes
        gais_headline: "समूह अपघात विमा योजना (GAIS)",
        pmmsy_heading: "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY)",
        gais_pmmsy: "समूह अपघात विमा योजना (GAIS) - प्रधानमंत्री मत्स्य संपदा योजना (PMMSY) (English)",
         gais_pmmsy1:"समूह अपघात विमा योजना (GAIS) - प्रधानमंत्री मत्स्य संपदा योजना (PMMSY) (Hindi)",





      }
    }
  },
});

export default i18next;