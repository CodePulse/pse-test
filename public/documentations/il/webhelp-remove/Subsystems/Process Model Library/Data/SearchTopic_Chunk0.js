define({"0":{i:0.0339151845992579,u:"../Content/Topics/c251.html",a:"Introduction\n\t\t\t The gPROMS Process Model Library (PML) is a collection of commonly used process equipment models. The library is designed to enable the user to\n quickly construct process flowsheet models that are suitable for use in steady state and dynamic simulation, parameter estimation and ...",t:"Introduction"},"1":{i:0.0264274161399407,u:"../Content/Topics/x295.html",a:"The contents of each library are tabulated below. Also indicated in the table is the  model\n class  (Node, Connector, Hybrid or Control) and nature of the models equations (algebraic: steady-state or differential-algebraic: dynamic) for\n each model. Note that all the models make use of the same set ...",t:"Library contents"},"2":{i:0.0264274161399407,u:"../Content/Topics/c479.html",a:"Understanding the PML For each PML model it is important to observe the following information: The Model Class - Node or Connector Its Material Ports  and  reversibility Its Control Ports Note that throughout the PML:   SI units of measurement  are enforced.",t:"Understanding the PML"},"3":{i:0.0320432424844286,u:"../Content/Topics/x498.html",a:"The PML is based upon a Node and Connector structure, with all equipment models being strongly typed\n as either a Node or a Connector. Non-equipment models, such as those relating to process control are not\n classified as Nodes or Connectors. Composite models, such as a column section are classified ...",t:"Model Class (Node or Connector)"},"4":{i:0.060871151685811,u:"../Content/Topics/x522.html",a:"The PMLMaterial Connection Type is used to define the\n characteristics of a connection between two PML ports. It can be found in the PML Basics Library. For basic information on connectivity refer to the\n the Custom Modelling guide. Connection Type Parameters The PMLMaterial Connection Type declares ...",t:"Material Ports"},"5":{i:0.0320432424844286,u:"../Content/Topics/x630.html",a:"The PML Basic Library also contains a simple Connection Type for control streams: PMLControl. This contains a single\n variable named signal. The PMLControl Connection Type allows users to connect up PML Control Library models with other PML component models: for\n this purpose many of the PML ...",t:"Control Streams"},"6":{i:0.0320432424844286,u:"../Content/Topics/x637.html",a:"Standard International (SI) units are used throughout the PML models. So, for example, the units of pressure are Pascal (Pa) and the units of\n mass are kilogram (kg). Mass units are used in the models (i.e. kg, kg/s and mass fractions). Where necessary the mass units are converted to local\n molar ...",t:"Units of measurement"},"7":{i:0.257124763602275,u:"../Content/Topics/c641.html",a:"For each PML Model it is possible to make all necessary specifications quickly and easily from its Specification dialog. The Model\u0027s\n Specification dialog can be opened by double clicking on the Model icon on the topology tab of a flowsheet model (see  building flowsheet models using the PML ). For ...",t:"PML Model specifications"},"8":{i:0.0264274161399407,u:"../Content/Topics/x655.html",a:"With the exception of trivial models (e.g. Dead End), all PML models have a Specification dialog that conforms to the following basic\n requirements: All relevant Parameters and Selectors in the model are compulsory specifications. Variables for ASSIGNment or as INITIAL conditions are optional ...",t:"Specification options"},"9":{i:0.106995809031654,u:"../Content/Topics/x712.html",a:"Apart from process control Models all PML models contain a declaration of (at least) one physical property foreign object; typically defined\n as: phys_prop AS FOREIGN_OBJECT \"PhysProp\" To use the PML you only need to specify the Foreign Object to use for physical property calculations in Material ...",t:"Material property specification"},"10":{i:0.0264274161399407,u:"../Content/Topics/x733.html",a:"Model help By clicking the Help button from a Model\u0027s specification dialog a description of the Model and its underlying assumptions can be accessed. Note\n that more detailed help can be found by following the hyperlinks on the help dialog.",t:"Model help"},"11":{i:0.244995913729497,u:"../Content/Topics/c741.html",a:"The PML is designed to enable the user to quickly construct process flowsheet models. When building flowsheets, the following general guidelines\n are suggested: Set up a working project - create a new flowsheet Model entity in a working project: this should be set-up\n to cross reference all of the ...",t:"Guidelines for constructing PML flowsheet Models"},"12":{i:0.0264274161399407,u:"../Content/Topics/c779.html",a:"A number of PML flowsheets are included as part of the gPROMS installation; you can access these by firstly loading the PML (see  loading the PML ) and then clicking on the browse examples button on the gPROMS tool bar and navigating to \"PML\n flowsheets\\PML Flash Separation Example.gPJ\" (as shown ...",t:"Example - PML Flash Separation"},"13":{i:0.0339151845992579,u:"../Content/Topics/x802.html",a:"PML flash separation topology The topology of the flash separation example is shown below.",t:"PML flash separation topology"},"14":{i:0.0339151845992579,u:"../Content/Topics/x810.html",a:"Feed (Source) In the source we specify the feed properties (mass fractions of all components, temperature and pressure) as well as the physical properties.\n It is assumed that one can use ideal physical properties, and so the following specification is made in the physical properties cell of the ...",t:"PML flash separation Unit specifications"},});