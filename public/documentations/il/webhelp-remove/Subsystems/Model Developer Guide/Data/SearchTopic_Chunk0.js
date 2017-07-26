define({"0":{i:0.00174792691106233,u:"../Content/Topics/Custom Modelling.htm",a:"This guide explains the fundamental concepts of model development in gPROMS: Describe the behaviour of a process model in mathematical equations which can combine algebraic dynamic discrete (transitions) and integral expressions. Define schedules and tasks which describe the operational behaviour. ...",t:"Custom Modelling in gPROMS"},"1":{i:0.00174792691106233,u:"../Content/Topics/c251.html",a:"gPROMS process models are built from a number of fundamental building blocks or Entities (see also: Entities). A gPROMS process model (for a Simulation activity) consists of the following\n entities: Variable Types Connection Types Models Tasks Processes Saved Variable Sets Note that the entities ...",t:"gPROMS Fundamentals"},"2":{i:0.0305050891445087,u:"../Content/Topics/x292.html",a:"See also:  Declaring Variable Types In gPROMS, all quantities calculated by  Model  Equations are Variables; Variables are always\n    Real (continuous) numbers and must always be given a Variable Type. Variable Types have the following information, A name, to which the type may be referred globally. ...",t:"Variables and Variable Types"},"3":{i:0.00901063776677003,u:"../Content/Topics/x325.html",a:"See also:  Declaring Connection Types Connections between different Units in a flowsheet Model are associated with a Connection Type which defines the type of information\n conveyed by the connection. A Connection Type definition includes A declaration of a set of Parameters, Distribution domains and ...",t:"Connection Types"},"4":{i:0.0207994647628123,u:"../Content/Topics/x358.html",a:"See also:  Defining a gPROMS Model A Model provides a description of the physical behavior of a given system in the form of mathematical equations: a gPROMS process model will\n contain at least one Model. Each Model contains the following information (defined in each of its associated tabs): A ...",t:"Models"},"5":{i:0.0158442866388071,u:"../Content/Topics/x374.html",a:"The gPROMS Language Tab in the Model entity comprises a number of sections, each containing a different type of information regarding the\n system being Modelled. The minimal information that needs to be specified in any Model is the following: A set of constant Parameters that characterise the ...",t:"gPROMS Language declaration for Models"},"6":{i:0.00858021905155598,u:"../Content/Topics/x431.html",a:"See also:  Defining a Task A Task is a Model of an operating procedure. An operating procedure can be considered as a recipe that defines periods of undisturbed\n operation along with specified or conditional external disturbances to the system. A  Process Entity  defines an operating procedure for a ...",t:"Tasks"},"7":{i:0.00174792691106233,u:"../Content/Topics/x450.html",a:"A Task is defined by three sections: Task Parameter declarations, (optional) Task Variable declarations and a Schedule where the Task\u0027s\n operating procedure is expressed in terms of the Task Parameters and Variables. Overall, the structure of a Task definition is the following: PARAMETER\n ... ...",t:"gPROMS language declaration for Tasks"},"8":{i:0.00905168637489272,u:"../Content/Topics/x472.html",a:"See also:  Defining a gPROMS Process A Model can usually be used to study the behaviour of the system under many different circumstances. Each such specific situation is called\n a simulation activity. The coupling of Models with the particulars of a dynamic simulation activity is done in a Process\n ...",t:"Processes"},"9":{i:0.00174792691106233,u:"../Content/Topics/x493.html",a:"A gPROMS Project may contain multiple Processes, each corresponding to a different simulation activity (e.g. simulation of system startup,\n simulation of system shutdown, steady state operation, etc.). A Process is partitioned into sections, each containing information required to\n define the ...",t:"gPROMS Language declaration for Processes"},"10":{i:0.00870008608020288,u:"../Content/Topics/x515.html",a:"The values of all Model Variable and Selectors at a particular simulation time can be saved for later re-use; these values are stored in\n    Saved Variable Sets. Saved Variable Sets are used to provide good initial guesses for initialisation calculations (over-riding the default values for the ...",t:"Saved Variable Sets"},"11":{i:0.00174792691106233,u:"../Content/Topics/c551.html",a:"Variable Types  are an essential requirement for all gPROMS process models as all Variables in a gPROMS Model must be associated with a Variable Type. In a similar way all Model Ports must be associated with a  Connection Type . When developing gPROMS Models you can either use existing Variable or ...",t:"Declaring Variable and Connection types"},"12":{i:0.0202681178325659,u:"../Content/Topics/x568.html",a:"In the Project tree, expanding a Project or Library reveals the first Entity type -  Variable Types . In order to create your own Variable\n Type, you can either select New entity.... from the Entity menu - choosing\n Variable Type as the Entity type (see also: Entities) or by editing an existing ...",t:"Declaring Variable Types"},"13":{i:0.00856551058582423,u:"../Content/Topics/x601.html",a:"Declaring Connection Types Connection Types  are declared using a multi-tab forms-based editor. Each of the four principal tabs\n allows you to declare different aspects of the Connection Type: Parameters \u0026 Variables tab Graphical representation tab Port categories tab Display templates tab",t:"Declaring Connection Types"},"14":{i:0.00320414078461695,u:"../Content/Topics/x621.html",a:"To declare quantities for a Connection Type simply double click on the cells labeled \u003cnew\u003e and\n enter the name of the quantity. You can then enter information pertaining to Parameters, Distribution Domains and Variables - these are\n identical to those that are declared in  Models .  The PMLMaterial ...",t:"The Parameters and Variables tab"},"15":{i:0.00320414078461695,u:"../Content/Topics/x664.html",a:"Connections between different Units in a flowsheet Model are associated with a Connection Type. Such connections are displayed graphically\n on the flowsheet Model\u0027s topology tab - the graphical representation of such connections is determined by its Connection Type. The information provided on the ...",t:"The Graphical representation tab"},"16":{i:0.00931501523270456,u:"../Content/Topics/x698.html",a:"The Port categories tab and connectivity rules gPROMS enforces a number of rules to ensure that only valid connections can be made when building flowsheet Models, and as such all Ports\n must be defined as an Inlet, an Outlet or a Bi-directional Port. When  defining a Model Port  the developer must ...",t:"The Port categories tab and Connectivity rules"},"17":{i:0.00320414078461695,u:"../Content/Topics/x756.html",a:"The Display templates tab enables you to define which of the Variables carried by the Connection Type should appear\n in results stream tables. On this tab you provide a label for each of the Variables that should be displayed in the stream table and the order in which the\n quantities should appear ...",t:"The Display templates tab"},"18":{i:0.00254007140029127,u:"../Content/Topics/c775.html",a:"The development of a basic gPROMS process model is explained by reference to the gPROMS Project Buffer Tank.gPJ that can be found in the\n installation.You can access this by clicking on the Browse Examples button on the gPROMS Toolbar and then navigating to \"General capabilities\\Other\n ...",t:"Defining Models and Processes"},"19":{i:0.00198782868625906,u:"../Content/Topics/x828.html",a:"Buffer Tank.gPJ describes a simple buffer tank with gravity-driven outflow (see the figure below). It is a good choice for illustrating the\n main features of the gPROMS language because it comprises only one simple unit operation, for which a primitive model can be\n constructed. Primitive models are ...",t:"An illustrative buffer tank example"},"20":{i:0.0162650565312298,u:"../Content/Topics/x887.html",a:"In gPROMS, Model Entities are the central part any process model. A working gPROMS Project will contain (or reference) at least one Model:\n     A Model is defined as a set of quantities and mathematical equations that, when coupled with a set of specifications, describe\n the behaviour of a given ...",t:"Defining a gPROMS Model"},"21":{i:0.00659206892984896,u:"../Content/Topics/x914.html",a:"The Parameter section is used to declare the parameters of a Model. Parameters are time-invariant quantities that will\n      not, under any circumstances, be the result of a calculation. Quantities such as physical constants\n (pi, R, etc.), Arrhenius coefficients and stoichiometric coefficients ...",t:"The PARAMETER section"},"22":{i:0.0121955831588905,u:"../Content/Topics/x940.html",a:"The VARIABLE section is used to declare the Variables of a Model. All quantities that are calculated in Model\n Equations must be declared as Model Variables. For instance, in the example process, M, h,\n       and  are variables of the Buffer Tank Model: VARIABLE \n HoldUp AS Mass \n FlowIn, FlowOut AS ...",t:"The VARIABLE section"},"23":{i:0.00640634752884419,u:"../Content/Topics/x963.html",a:"The EQUATION section is used to declare the equations that determine the time trajectories of the variables\n already declared in the VARIABLE section. The gPROMS language is purely declarative. That is, the order in which the equations are declared is of no importance. Simple equations\n are ...",t:"The EQUATION section"},"24":{i:0.00534840084126926,u:"../Content/Topics/x1004.html",a:"In the gPROMS language a Model is used to define the physical behaviour of a system and it usually contains\n    PARAMETER, VARIABLE and EQUATION declarations. A model can usually be\n used to study the behaviour of the system under many different circumstances. Each such specific situation is called ...",t:"Defining a gPROMS Process"},"25":{i:0.00390425708930957,u:"../Content/Topics/x1047.html",a:"The first item of information required to set up a dynamic simulation activity is the process equipment under investigation. This is\n declared in the UNIT section of a PROCESS. Equipment items are declared as instances of Models. For example UNIT \n T101 AS BufferTank creates an instance of ...",t:"The UNIT section"},"26":{i:0.00387266257969102,u:"../Content/Topics/x1062.html",a:"Before an instance of a Model can actually be used in a simulation, all its parameters must be specified (unless they have been given\n default values). This is done in the SET section of a PROCESS. 1 The specification of parameter values can also be performed within Models, using a\n          SET ...",t:"The SET section"},"27":{i:0.00586917474557201,u:"../Content/Topics/x1105.html",a:"The set of equations resulting from the instantiation of Models declared in the UNIT section is typically\n under-determined. This simply means that there are more variables than equations. The number of degrees of freedom in the\n simulation activity is given by: Number of degrees of freedom (NDOF) = ...",t:"The ASSIGN section"},"28":{i:0.00415573703478617,u:"../Content/Topics/x1135.html",a:"Before dynamic simulation can commence, consistent values for the system variables at t = 0 must be determined. To\n this end, a number of additional specifications are needed. These augment the system of equations that describe the behaviour of the system and\n result in a square system of equations ...",t:"The INITIAL section"},"29":{i:0.00267073409618593,u:"../Content/Topics/x1159.html",a:"The user also has the option to control various aspects of model-based activities carried out in gPROMS such as solver settings and output\n specifications. The SOLUTIONPARAMETERS section is used for this purpose. Detailed information regarding this topic will\n be covered in more detail in  Numerical ...",t:"The SOLUTIONPARAMETER section"},"30":{i:0.00267073409618593,u:"../Content/Topics/x1171.html",a:"Information on the external manipulations (e.g. known disturbances) that are to be simulated is provided in the\n      SCHEDULE section of the PROCESS. We restrict our attention to the simplest possible case,\n allowing the system to operate without any external disturbance over a specified period of ...",t:"The SCHEDULE section"},"31":{i:0.0102015583469267,u:"../Content/Topics/c1185.html",a:"The gPROMS language provides some advanced mechanisms for the declaration of complex equation structures in Models. In many cases, a number of Parameters, Variables or Equations that appear in a Model are closely related. Examples include: the stoichiometric coefficients, , of a set of components ...",t:"Arrays"},"32":{i:0.00391585563372619,u:"../Content/Topics/x1225.html",a:"Arrays are used in many places during Model construction Declaring arrays of Parameters Declaring arrays of Variables Declaring arrays of Selectors Declaring arrays of Units in Composite Models In all these cases Arrays can have any number of dimensions. The size of each dimension can be a general ...",t:"Declaring arrays in Models"},"33":{i:0.00241364876654973,u:"../Content/Topics/x1265.html",a:"Model Parameters are declared in the Parameter section of gPROMS Models to belong to the basic types INTEGER or\n      REAL. Such Parameters may be scalars or arrays of one, two or more dimensions. Consider, for instance, the Parameter\n section in a model of a liquid-phase continuous stirred tank ...",t:"Declaring arrays of Parameters in Models"},"34":{i:0.00241364876654973,u:"../Content/Topics/x1288.html",a:"Arrays of Model Variables are declared in a manner very similar to that used for Parameters. For example, the Variable section of the\n liquid-phase CSTR Model entity is shown in the gPROMS code below. Example 2. Variable section of a liquid-phase CSTR Model # MODEL LiquidPhaseCSTR\n\n PARAMETER\n ... ...",t:"Declaring arrays of Variables in Models"},"35":{i:0.00282455843203474,u:"../Content/Topics/x1296.html",a:"As with Variables and Parameters, arrays of Selectors may also be defined (see  The Case conditional\n construct  for an introduction to Selectors), as shown in the example below. Example 3. Arrays of Selectors # MODEL LiquidPhaseCSTR\n\n PARAMETER\n NoDiscs AS INTEGER\n ... \n\n VARIABLE\n ... \n\n SELECTOR\n ...",t:"Declaring arrays of Selectors in Models"},"36":{i:0.00290890583589579,u:"../Content/Topics/x1303.html",a:"As with Variables and Parameters, arrays of Units may also be defined (see  Composite Models ). The\n figure below illustrates a potential use of this feature in the definition of a Model for a series of distillation column trays. # MODEL LinkedTrays\n\n PARAMETER\n NoTrays AS INTEGER\n ... \n\n UNIT\n ...",t:"Declaring arrays of Units in Composite Models"},"37":{i:0.00490636977241832,u:"../Content/Topics/x1323.html",a:"The contents of an array may be referenced in several different ways (consider the declarations given below:) Entire arrays can be referenced by using their names alone. For instance, Rho denotes the entire array of\n component molar densities. Individual elements can be referenced by using the name ...",t:"Referring to array elements"},"38":{i:0.007174900014004,u:"../Content/Topics/x1359.html",a:"A powerful concept in gPROMS is that of array expressions. Consider, for example, the algebraic expression: x * y + w * z If x, y, w and z are scalar Variables,\n then the above also corresponds to a scalar. However, in gPROMS, the expression x * y + w * z is valid even if\n    x, y and z are arrays ...",t:"General rules for array expressions"},"39":{i:0.00541069654041455,u:"../Content/Topics/x1480.html",a:"Elements of arrays (both Parameters and Variables) can be used in Equations as if they were individual Parameters or Variables. For example,\n the equation that defines the concentration of component 2 in the liquid-phase CSTR can be written as follows: HoldUp(2) = C(2) * V ; However, arrays can be ...",t:"Using arrays in equations"},"40":{i:0.00681134625778443,u:"../Content/Topics/x1496.html",a:"We have seen how array expressions can be formed by combining arrays of Parameters or Variables, or elements or slices of these. By\n analogy, gPROMS allows the definition of array equations of the form: Expression E = Expression F; that are valid provided they conform to one of the following four ...",t:"Writing implicit array equations"},"41":{i:0.00504714278419497,u:"../Content/Topics/x1560.html",a:"We have seen how array equations can be written in an implicit manner by exploiting the array expression capability of gPROMS. An\n alternative is to write array equations explicitly using a FOR construct that is similar to that provided by most high-level programming\n languages. Thus, consider the ...",t:"Writing explicit array equations using the FOR construct"},"42":{i:0.00710581734267418,u:"../Content/Topics/x1588.html",a:"For dynamic Arrays (i.e. Arrays whose bounds are set by an expression involving other Parameters), it is possible to set the length of the\n Array to zero 1 In principle, one could also set the length to zero explicity, but this would be pointless! . This is useful for two reasons: Greater modelling ...",t:"Zero-Length Arrays"},"43":{i:0.00867934489424017,u:"../Content/Topics/c1602.html",a:"Intrinsic gPROMS Functions Intrinsic gPROMS functions are used in equations to perform mathematical operations that would be difficult or even impossible to declare\n using normal language operators. The gPROMS language contains two categories of intrinsic functions, namely: Vector intrinsic ...",t:"Intrinsic gPROMS functions"},"44":{i:0.00543680358119823,u:"../Content/Topics/x1613.html",a:"All vector intrinsic functions have the following characteristics: they take a single argument representing a scalar or array expression; they return a result of dimensionality and size identical to those of their argument. The table below lists all vector functions that are recognised by gPROMS. ...",t:"Vector intrinsic functions"},"45":{i:0.00650278074245089,u:"../Content/Topics/x1711.html",a:"All scalar intrinsic functions have the following characteristics: they take an arbitrary number of arguments, each representing a scalar or array expression; they return a scalar result. The table below lists all scalar functions that are recognised by gPROMS. Scalar intrinsic functions Identifier ...",t:"Scalar intrinsic functions"},"46":{i:0.00215883657654734,u:"../Content/Topics/c1777.html",a:"The physical behaviour of many process operations is described in terms of discontinuous equations, the form of which\n depends on the current variable values and, in certain cases (e.g. involving hysteresis effects), also some aspects of the past history of the\n system. gPROMS provides two powerful ...",t:"Conditional Equations"},"47":{i:0.00408242160753058,u:"../Content/Topics/x1799.html",a:"Discontinuities in the description of the physical behaviour of process systems may arise in different ways such as: transitions from laminar to turbulent flow; reversal of the direction of flow; appearance and disappearance of thermodynamic phases; equipment failure; and many others. ...",t:"Using State-Transition Networks to model discontinuities"},"48":{i:0.0103128478682045,u:"../Content/Topics/x1924.html",a:"The gPROMS example below illustrates the use of the CASE construct in a Model of a vessel with a bursting\n disc. Example 1. Model entity for a vessel equipped with a bursting disc # MODEL VesselWithDisc\n\n PARAMETER\n R AS REAL DEFAULT 8.314 # J/K.mol\n VesselVolume AS REAL\n BurstPressure AS REAL\n ...",t:"The Case conditional construct"},"49":{i:0.00220669042179589,u:"../Content/Topics/x1984.html",a:"Case constructs provide a general way in which  STN s of arbitrary complexity can be described in the gPROMS\n language. However, reversible and symmetric discontinuities are by the far the most commonly encountered discontinuities in industrial processing\n systems. Although such discontinuities can ...",t:"The If conditional construct"},"50":{i:0.00494361940419701,u:"../Content/Topics/c2003.html",a:"A significant number of unit operations in chemical or biochemical processes take place in distributed systems in which properties vary with\n respect to one or more spatial dimensions as well as time. For instance, a tubular reactor is described in terms of parameters and variables that,\n in ...",t:"Distributed Models"},"51":{i:0.00317686670195309,u:"../Content/Topics/x2054.html",a:"The temperature in the  reactor  varies with time, axial and radial position\n (T(z,r,t)). Although all Variables that are declared within a Model are automatically assumed to be\n functions of time, variations over other distribution domains (in this case the axial and radial domains,\n    z and r ...",t:"Declaring Distribution Domains"},"52":{i:0.00221483999364474,u:"../Content/Topics/x2073.html",a:"A Model may involve Variables with different degrees of distribution. For instance, in the tubular reactor example, the temperature of the\n fluid and the concentrations of the various chemical components within the tube are indeed functions of both the radial and axial positions.\n However, the wall ...",t:"Declaring Distributed Variables"},"53":{i:0.00452742711877764,u:"../Content/Topics/x2121.html",a:"As with lumped models, Distributed Variables in Models are related through sets of equations that are declared in the Equation section. For\n example, consider the following declarations within a Model of a tubular reactor: # MODEL TubularReactor\n\n PARAMETER\n\n # Geometrical parameters\n ...",t:"Defining Distributed Equations"},"54":{i:0.00315617141323505,u:"../Content/Topics/x2268.html",a:"Partial differentiation of a distributed Variable or expression with respect to a domain over which it is distributed is achieved with the\n    PARTIAL operator. Its syntax is of the form: PARTIAL ( Expression, DistributionDomain ) where Expression is a general expression and DistributionDomain is ...",t:"Introducing Partial Differential Equations"},"55":{i:0.00308933653167683,u:"../Content/Topics/x2288.html",a:"Considering the example presented in  Distributed Equations , the following are examples of\n valid first order partial derivative expressions: PARTIAL(T,Axial) PARTIAL(Vz(0|+:L, ReactorRadius) * T(0|+:L,ReactorRadius),Radial) PARTIAL(Kr(0,0|+:ReactorRadius|-) * ...",t:"First order partial derivatives"},"56":{i:0.00308933653167683,u:"../Content/Topics/x2349.html",a:"PARTIAL operators may be nested to express higher order derivatives as follows: PARTIAL( Expression, PARTIAL( Expression, DistributionDomain ), DistributionDomain ) Alternatively, the following abbreviated form may be used: PARTIAL ( Expression, DistributionDomain, DistributionDomain ) Here ...",t:"Higher-order partial derivatives"},"57":{i:0.00174792691106233,u:"../Content/Topics/x2372.html",a:"There are two main approaches to discretise a\n partial derivative of an expression (for a given numerical method): Apply the chain rule to reduce the term to a series of derivatives of a single variable and apply the discretisation scheme to each\n simple derivative Apply the discretisation scheme ...",t:"Conservative discretisation formulae for partial derivatives"},"58":{i:0.00328081715489741,u:"../Content/Topics/x2401.html",a:"Integrals occur frequently in equations arising in a number of branches of physics and engineering. In process engineering applications,\n they often occur in population balance models describing, for instance, crystal size distributions, activity distributions of recycled catalyst\n particles, and ...",t:"Introducing Integral Expressions"},"59":{i:0.00314231215762297,u:"../Content/Topics/x2421.html",a:"The following are examples of single integrals: INTEGRAL(z := 0:1 ; z^2) INTEGRAL(z := 0:ReactorLength ; T(z,0|+:ReactorRadius|-)-Tc) Note that an integration variable (e.g. z in the above examples) is introduced to define the range of\n integration. The integrand is generally an expression that may ...",t:"Single integrals"},"60":{i:0.00314231215762297,u:"../Content/Topics/x2457.html",a:"Multiple integrals can be defined via a shorthand notation. For example, the mean temperature in the entire tubular reactor is given\n by: which, in gPROMS, can be written as: 2 / (ReactorLength*ReactorRadius^2) *\n INTEGRAL(z := 0:ReactorLength , r := 0:ReactorRadius ; r*Temp(z,r)) ",t:"Multiple integrals"},"61":{i:0.00174792691106233,u:"../Content/Topics/x2469.html",a:"The Distribution concept can be considered as a generalisation of an Array, so the Integral operator can also be used for the integration\n of a given expression over discrete domains that define Array sizes. Thus, Integral can itself be viewed as a generalisation of the Sigma  intrinsic function  ...",t:"Relationship between the Integral and Sigma Operators"},"62":{i:0.00352784328143535,u:"../Content/Topics/x2505.html",a:"As in the case of array equations, there are two different ways of writing distributed equations in gPROMS: in an\n    implicit manner or an explicit manner. Implicit specification The first exploits the concept of  distributed expressions  to define equations in an\n    implicit manner. For example, ...",t:"Explicit and Implicit Distributed Equations"},"63":{i:0.00510107991650256,u:"../Content/Topics/x2549.html",a:"In contrast to initial conditions, which may differ from one simulation experiment to the next, boundary conditions are part of the\n description of the physical system behaviour itself. In gPROMS, they are therefore specified within Models. Boundary conditions can be viewed\n simply as additional ...",t:"Providing Boundary Conditions"},"64":{i:0.00582720868413973,u:"../Content/Topics/x2564.html",a:"The solution of systems of IPDAEs is generally a difficult problem. Changing the value of a parameter or one of the boundary conditions may\n lead to completely different behaviour from that originally anticipated. Furthermore, although some numerical methods can accurately solve a given\n system, ...",t:"Specifying Discretisation Methods"},"65":{i:0.00221483999364474,u:"../Content/Topics/x2679.html",a:"The discretisation methods described so far have all been based on a\n uniform grid. For finite-difference methods, all elements are the same size: the length of the Distribution_Domain divided by the number of\n elements. The same is true of Orthogonal Collocation on Finite Elements (although within ...",t:"Non-uniform grids"},"66":{i:0.00268925833065263,u:"../Content/Topics/x2704.html",a:"The first approach to specifying a non-uniform grid is for the user to specify the location of all the grid nodes. This is done in the\n SET section when Setting the Distribution Domain Parameter. Rather than specifying the number of elements, simply enter the normalised\n positions of each of the ...",t:"Manually specifying grid points"},"67":{i:0.00268925833065263,u:"../Content/Topics/x2708.html",a:"An easier (but less general) way to specify the grid nodes is by use of a tranformation. If the problem is expected to exhibit large\n gradients at the start of the domain, which reduce towards the end of the domain, a logarithmic transformation can be used to place more nodes\n near the lower bound ...",t:"Specifying a grid transformation"},"68":{i:0.00739603358508382,u:"../Content/Topics/c2799.html",a:"A composite Model is one that contains one or more other Model entities as a sub-Model. Composite Models can either be constructed graphically\n on the topology tab of a flowsheet model or using the gPROMS language; or even some combination of these two approaches. In the case of graphical model ...",t:"Composite Models"},"69":{i:0.00279572850318119,u:"../Content/Topics/x2834.html",a:"Certain complex unit operations may involve many tens of thousands of Variables and equations. Although in principle all of these could be\n written in a single Model entity, in practice such an undertaking would be extremely tedious and error-prone. The gPROMS language provides tools\n for managing ...",t:"Motivation for Model Decomposition"},"70":{i:0.00399735517794568,u:"../Content/Topics/x2850.html",a:"In gPROMS, an instance of a Model is called a Unit. Consequently, if we wish to insert one or more instances of one or more Models within\n another (higher-level) Model, we have to introduce a Unit section within the latter. Consider, for instance, the declaration of a distillation column Model that ...",t:"Instances of lower-level Models: Units"},"71":{i:0.00624883391994362,u:"../Content/Topics/x2883.html",a:"Connections made between a Model\u0027s Ports (see:  Defining Ports ), whether created graphically\n (see: Constructing flowsheet Models) on the composite\n Model\u0027s topology tab or directly in the gPROMS language, should be placed in the TOPOLOGY section; the general syntax for this is shown\n below ...",t:"Topology connectivity using the gPROMS Language"},"72":{i:0.00174792691106233,u:"../Content/Topics/x2909.html",a:"Recalling the  DistillationColumn  Model used to introduce\n lower-level Model instances, one of its sub-Models is a Model of a column section, called LinkedTrays: # MODEL DistillationColumn \n\nPARAMETER \n ...\n\nUNIT\n Condenser AS TotalCondenser\n Reboiler AS PartialReboiler\n TopSection AS LinkedTrays\n ...",t:"Arrays of Units"},"73":{i:0.0060876174045295,u:"../Content/Topics/x2924.html",a:"As the number of intermediate hierarchical levels increases, so does the length of the pathnames required to reference Parameters and\n Variables at or close to the bottom of the hierarchy. Pathnames of the form: SeparationSection.Column(2).TopSection.Stage(1).T  are\n quite common when dealing with ...",t:"Variable pathnames and WITHIN"},});