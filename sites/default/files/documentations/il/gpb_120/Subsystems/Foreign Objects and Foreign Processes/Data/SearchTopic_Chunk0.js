define({"0":{i:0.00809600581911012,u:"../Content/Topics/c251.html",a:"Foreign Objects  are external software components that provide certain computational services to gPROMS\n Models. These include physical property packages, external unit operation modules, or even complete computational fluid dynamics (CFD) software\n packages. This chapter explains how to make use of ...",t:"Overview"},"1":{i:0.0103899630776784,u:"../Content/Topics/x264.html",a:"Using Foreign Objects A Foreign Object is an external piece of software which provides a gPROMS simulation or optimisation run with computational services\n during run time. Typical examples include: A package that provides various routines for calculating the values of one or more thermophysical ...",t:"What is a Foreign Object?"},"2":{i:0.00809600581911012,u:"../Content/Topics/x274.html",a:"In principle, most types of mathematical relations can be expressed directly as Equations in gPROMS Models. However, there may still be\n good reasons why one would want to use an external (\"foreign\u0027\u0027) software package to express relationships between some of the variables in a\n Model: The ...",t:"Why use a Foreign Object?"},"3":{i:0.00809600581911012,u:"../Content/Topics/x286.html",a:"By this stage, you may well be wondering about the meaning and origins of the term \"Foreign Object\u0027\u0027. Here the term \"Foreign\u0027\u0027 simply indicates that this software is external to the gPROMS system and its input. The term \"Object\u0027\u0027 is a software engineering one: it refers to the fact that this ...",t:"What\u0027s in a name?"},"4":{i:0.0342544528229896,u:"../Content/Topics/x291.html",a:"Before going any further, let\u0027s introduce some of the rules that govern the use and operation of Foreign Objects in gPROMS and also some\n of the terminology that we will be using throughout this chapter. Each gPROMS simulation or optimisation run may interact with any number of Foreign Objects. Each ...",t:"Some rules and terminology"},"5":{i:0.030773045061483,u:"../Content/Topics/x308.html",a:"As we mentioned at the start of the previous section on  rules and terminology , each gPROMS run\n may make use of any number of Foreign Objects. So, by way of an example, consider a simulation run making use of: a Foreign Object calculating physical properties in the high-pressure, low-temperature ...",t:"Classes and instances"},"6":{i:0.00809600581911012,u:"../Content/Topics/x330.html",a:"If you intend to  use Foreign Objects  that are already interfaced to gPROMS,\n all you need to read is the next section. This tells you how to reference Foreign Objects inside your gPROMS input files. If, on the other hand, you intend to interface your own Foreign Objects to gPROMS for use by ...",t:"What do I need to read next?"},"7":{i:0.0149778775948149,u:"../Content/Topics/x341.html",a:"Using Foreign Objects in gPROMS entities A description of how to make use of Foreign Objects in different gPROMS entities follows. It is assumed that these objects are already fully\n implemented, tested and interfaced to gPROMS.",t:"Using Foreign Objects in gPROMS entities"},"8":{i:0.0266775984317929,u:"../Content/Topics/x344.html",a:"As we have already explained, a Foreign Object basically provides a means of calculating one or more quantities as function(s) of the\n gPROMS variables. As such, the natural place for these objects to appear is in the gPROMS Models. The usage of Foreign Objects in Models is governed by a set of ...",t:"Using Foreign Objects in gPROMS Models"},"9":{i:0.0218597493705196,u:"../Content/Topics/x413.html",a:"As we have seen, each Foreign Object is an instance of a class which determines the actual external software that will be used to compute\n the methods that the Foreign Object is supposed to provide. However, in most cases, just specifying the class of the Foreign Object is not\n sufficient to ...",t:"Foreign Object values and their specification"},"10":{i:0.00809600581911012,u:"../Content/Topics/x421.html",a:"Like any other gPROMS Parameter, the value of a Foreign Object can be Set in one of three ways: Within the Model in which the Foreign Object is declared. For example, we could insert the following line after line 12 of the Flash Model shown in the example in :  Foreign Object values and their ...",t:"Explicit specification of a Foreign Object value"},"11":{i:0.00809600581911012,u:"../Content/Topics/x444.html",a:"Like other gPROMS Parameters, the values of Foreign Objects may be specified implicitly via the gPROMS parameter propagation\n mechanism. Parameter propagation is invoked automatically by gPROMS at the start of the execution of a Process entity if the value of any Foreign\n Object instance within the ...",t:"Implicit specification of a Foreign Object value"},"12":{i:0.00809600581911012,u:"../Content/Topics/x469.html",a:"To make correct use of a Foreign Object in your Models, you need the following information: The name of the Foreign Object class. The names of the methods provided by this Foreign Object. The following information for each method: The type, length, physical dimensions and units of measurement of the ...",t:"Ensuring correct usage of Foreign Objects"},"13":{i:0.00809600581911012,u:"../Content/Topics/x568.html",a:"gPROMS checks the consistency of your Foreign Object usage at the start of the execution of a Process. To achieve this, it goes though a\n number of steps: It attempts to locate the external software identified by the Foreign Object class name(s) by searching first in a sub-directory\n called \"fo\" in ...",t:"Consistency checking"},"14":{i:0.0103899630776784,u:"../Content/Topics/x593.html",a:"Using Foreign Processes The Foreign Process Interface (FPI) provides a general mechanism for\n the exchange of information between executing gPROMS simulations and\n external software. This communication takes place at discrete time points throughout\n the duration of the simulation. The user is ...",t:"Introduction"},"15":{i:0.00809600581911012,u:"../Content/Topics/x604.html",a:"Typical applications of the FPI include: the use of gPROMS simulations to study and validate control\n algorithms implemented in an external real-time control\n system; the construction of bespoke user-interfaces to gPROMS\n simulations offering a well-defined and limited scope for\n modifications on ...",t:"Applications of the FPI"},"16":{i:0.00809600581911012,u:"../Content/Topics/x616.html",a:"The FPI comprises two main components:  A set of elementary communication\n tasks. By inserting instances of these tasks in Schedules within Task\n and Process entities, the user determines the timing and content of\n any communication that will occur when the Schedule is\n executed. A communication ...",t:"What is the FPI?"},"17":{i:0.00809600581911012,u:"../Content/Topics/x642.html",a:"Documentation overview The rest of this chapter is structured as follows: The section on  elementary communication\n tasks  describes the elementary communications tasks that\n comprise an FPI and the effects they have on the simulation. The section on  using the\n FPI  explains how to ensure that the ...",t:"Chapter outline"},"18":{i:0.0270786368383323,u:"../Content/Topics/x657.html",a:"Dynamic simulations in gPROMS are defined in Process entities which\n can be executed to carry out the simulation. In general, each Process\n involves a Schedule of actions (defined by Task entities) organised in\n Sequence or in Parallel. There is also the possibility of conditional (If)\n and ...",t:"The elementary communication tasks"},"19":{i:0.0126553132227995,u:"../Content/Topics/x688.html",a:"The Pause elementary communication task The Pause elementary task simply holds the gPROMS simulation until\n a signal is received from the Foreign Process.",t:"The Pause elementary communication task"},"20":{i:0.0537277260027809,u:"../Content/Topics/x691.html",a:"General syntax The syntax of the Pause elementary task is: PAUSE SIGNALID \"SigName\" STATUS StatVar where",t:"General syntax"},"21":{i:0.00809600581911012,u:"../Content/Topics/x720.html",a:"As with all other elementary Tasks and user-defined Tasks, the\n Pause Task can be dragged into a Schedule using the Task palette or by\n right clicking on a hot spot in the Schedule and selecting\n        Pause from the Add Foreign Process\n task from the context menu. When this is done, a dialog will ...",t:"Using Pause in the Schedule tab of a Task or Process"},"22":{i:0.00809600581911012,u:"../Content/Topics/x740.html",a:"Side effects of Pause Pause tasks have no side effects on the simulation\n results.",t:"Side effects of Pause"},"23":{i:0.0126553132227995,u:"../Content/Topics/x743.html",a:"The Get elementary communication task The Get elementary task receives values of one or more variables\n from the Foreign Process.",t:"The Get elementary communication task"},"24":{i:0.00809600581911012,u:"../Content/Topics/x746.html",a:"The syntax of the Get elementary task is: GET\n SIGNALID \"SigName\"\n STATUS StatVar gPROMSVariable ;\n    gPROMSVariable ;\n    gPROMSVariable ;\n ...\n    gPROMSVariable := \"ForeignVariableID\" ;\n    gPROMSVariable := \"ForeignVariableID\" ;\n    gPROMSVariable := \"ForeignVariableID\" ;\n ...\nEND where",t:"General syntax"},"25":{i:0.0149778775948149,u:"../Content/Topics/x792.html",a:"In most applications, Get is applied to individual variables or\n array elements. However, in some cases, it may be desirable to Get\n values of an entire array or a slice of an array. The syntax for\n achieving this is of the form: GET\n SIGNALID \"SigName\"\n STATUS StatVar   gPROMSArrayVariable := ...",t:"Getting array and distribution slices"},"26":{i:0.00809600581911012,u:"../Content/Topics/x884.html",a:"As with all other elementary Tasks and user-defined Tasks, the\n Get Task can be dragged into a Schedule using the Task palette or by\n right clicking on a hot spot in the Schedule and selecting\n        Get from the Add Foreign Process\n task from the context menu. When this is done, a dialog will ...",t:"Using Get in the Schedule tab of a Task or Process"},"27":{i:0.0149778775948149,u:"../Content/Topics/x904.html",a:"A successful return (i.e. StatVar = TRUE)\n from the foreign process following a Get request provides the gPROMS\n simulation with a set of new values for the specified subset of its\n variables. These values overwrite the values that the variables had\n before the Get task. The actual effect of this ...",t:"Side effects of Get"},"28":{i:0.0126553132227995,u:"../Content/Topics/x937.html",a:"The Send elementary communication task The Send elementary task sends values of one or more variables to\n the Foreign Process.",t:"The Send elementary communication task"},"29":{i:0.00809600581911012,u:"../Content/Topics/x940.html",a:"General syntax The syntax of the Send elementary task is: SEND\n SIGNALID \"SigName\"\n STATUS StatVar gPROMSVariable ;\n \"ForeignVariableID\" := gPROMSVariable ;\n  gPROMSVariable ;\n \"ForeignVariableID\" := gPROMSVariable ;\n  gPROMSVariable ;\n \"ForeignVariableID\" := gPROMSVariable ;\n ...\nEND where",t:"General syntax"},"30":{i:0.00809600581911012,u:"../Content/Topics/x986.html",a:"Sending entire arrays and distributions, or slices thereof to a\n foreign process is handled in an entirely analogous fashion to Getting\n them from the Foreign Process. See also:  Getting array and\n distribution slices  for details on the relevant syntax and\n rules.",t:"Sending array and distribution slices"},"31":{i:0.00809600581911012,u:"../Content/Topics/x991.html",a:"As with all other elementary Tasks and user-defined Tasks, the\n Send Task can be dragged into a Schedule using the Task palette or by\n right clicking on a hot spot in the Schedule and selecting\n        Send from the Add Foreign Process\n task from the context menu. When this is done, a dialog will ...",t:"Using Send in the Schedule tab of a Task or Process"},"32":{i:0.00809600581911012,u:"../Content/Topics/x1011.html",a:"Side effects of Send Send tasks have no side effects on the simulation\n results.",t:"Side effects of Send"},"33":{i:0.0126553132227995,u:"../Content/Topics/x1014.html",a:"The Sendmathinfo elementary communication task The Sendmathinfo elementary task transmits to the Foreign Process\n information on the mathematical model being used by the simulation, and\n its current state.",t:"The Sendmathinfo elementary communication task"},"34":{i:0.0258003915373935,u:"../Content/Topics/x1017.html",a:"General syntax The syntax of the Sendmathinfo elementary task is: SENDMATHINFO SIGNALID \"SigName\" STATUS StatVar where",t:"General syntax"},"35":{i:0.00809600581911012,u:"../Content/Topics/x1042.html",a:"As with all other elementary Tasks and user-defined Tasks, the\n Sendmathinfo Task can be dragged into a Schedule using the Task\n palette or by right clicking on a hot spot in the Schedule and\n selecting SendMathInfo from the\n        Add Foreign Process task from the context\n menu. When this is done, ...",t:"Using Sendmathinfo in the Schedule tab of a Task or\n Process"},"36":{i:0.0208277380133039,u:"../Content/Topics/x1054.html",a:"The mathematical problem that gPROMS is solving over time can be\n written in the form: where x is a set of\n            nx differential variables; is a set of\n            nx time\n derivatives of the differential variables\n            x (i.e., ); y is a set of\n            ny algebraic variables; u is ...",t:"Information transmitted by Sendmathinfo"},"37":{i:0.00809600581911012,u:"../Content/Topics/x1294.html",a:"Side effects of Sendmathinfo Sendmathinfo tasks have no side effect on the simulation\n results.",t:"Side effects of Sendmathinfo"},"38":{i:0.00947238017425107,u:"../Content/Topics/x1297.html",a:"gPROMS includes a comprehensive model linearisation facility. This\n provides a means of using non-linear models that are coded in gPROMS and\n are of arbitrary complexity (e.g. described by mixed, integro-partial\n differential and algebraic equations) for control-system design using\n linear-analysis ...",t:"The Linearise elementary task"},"39":{i:0.00809600581911012,u:"../Content/Topics/x1300.html",a:"gPROMS models typically comprise mixed sets of non-linear\n differential and algebraic equations. These can be written in the\n form 1 Models of distributed processes described by mixed,\n integro-partial differential and algebraic equations (IPDAEs) are\n automatically converted to the above form by ...",t:"The basics of linearisation"},"40":{i:0.00809600581911012,u:"../Content/Topics/x1388.html",a:"gPROMS generates a linearised model from three specified items\n of information: the non-linear model described by the equation a set of input variables U; and a set of output variables Y. The linearised model is of the general form: where X is a set of state variables and\n        A, B, C\n        and ...",t:"The linearised model generated by gPROMS"},"41":{i:0.00809600581911012,u:"../Content/Topics/x1670.html",a:"The six cases presented above illustrate the complexity of what\n is, at first sight, a rather simple problem. The required analysis is\n performed automatically by gPROMS and is completely transparent to the\n user. The overall specification of the new facility is as\n follows: Given: the non-linear ...",t:"Formal statement of the linearisation problem"},"42":{i:0.00809600581911012,u:"../Content/Topics/x1721.html",a:"The linearisation facility is implemented as an elementary task\n that can be inserted anywhere in a gPROMS Schedule. The form of the task is illustrated in the example\n below 1 Note that \"tag names\u0027\u0027 are allowed as aliases for the gPROMS\n variable path names, and that semicolons are used as ...",t:"The Linearise elementary task"},"43":{i:0.00809600581911012,u:"../Content/Topics/x1760.html",a:"The Linearise task ultimately results in a call to a new Foreign\n Process Interface (FPI) routine, gFPLINEARISE. This complements the existing FPI routines, gFPI, gFPPAUSE,\n gFPGET, gFPSEND, gFPSENDM and gFPT. gFPLINEARISE receives the following list of arguments from\n gPROMS:",t:"The gFPLINEARISE procedure"},"44":{i:0.00809600581911012,u:"../Content/Topics/x1893.html",a:"gPROMS is provided with a default FPI implementation. Each execution of the default implementation of the gFPLINEARISE\n routine creates a file called PrName_n.gLINEAR,\n where: PrName is the name of the process that\n is currently executed (as passed to gFPLINEARISE by\n gPROMS). n is the number of ...",t:"The default gFPLINEARISE procedure"},"45":{i:0.0103899630776784,u:"../Content/Topics/x1908.html",a:"Once you introduce one or more elementary communication tasks in\n your simulation Schedule, gPROMS will seek to communicate with an external\n software package during the simulation. However, some additional\n information is required to specify exactly which\n    external piece of software is to be ...",t:"Using the FPI"},"46":{i:0.0149778775948149,u:"../Content/Topics/x1912.html",a:"The standard gPROMS executable installed on your system already\n provides a basic FPI implementation. In this implementation, the\n elementary communication tasks other than Linearise operate in the\n following manner: The  Pause\n task  prints a message to the screen and pauses the simulation\n until ...",t:"The standard FPI implementation"},"47":{i:0.00809600581911012,u:"../Content/Topics/x1929.html",a:"eventFPI. The eventFPI implementation of the Foreign Process\n Interface The eventFPI is provided for use within gPROMS as an\n alternative to the default implementation of the Foreign Process\n Interface . The eventFPI makes use of a set of dialogs that appear\n automatically during the execution of a ...",t:"The eventFPI implementation of the Foreign Process\n Interface"},"48":{i:0.00809600581911012,u:"../Content/Topics/x1940.html",a:"All eventFPI dialogs include: the SIGNAL ID identifying the elementary task being\n executed; the simulation time at which the interaction\n occurs; the value of the status of the execution of this\n elementary task; For  GET ,\n                   SEND  and\n                   PAUSE \n                  ...",t:"The eventFPI interaction dialogs"},"49":{i:0.00809600581911012,u:"../Content/Topics/x2047.html",a:"In most practical applications of the FPI, you will eventually\n want to use an FPI implementation that is more powerful than the\n standard one provided by gPROMS (see also:  standard FPI implementation ). This\n implementation will typically have been developed either by you or by\n another person ...",t:"Using non-standard FPI implementations"},"50":{i:0.0149778775948149,u:"../Content/Topics/x2059.html",a:"The FPI implementation to be used by a given simulation must be\n specified in the Solutionparameters section of the corresponding\n Process entity. The parameter that needs to be specified is called\n FPI, and the name of the FPI implementation is enclosed in quotes. For\n instance, the specification: ...",t:"Specifying the FPI implementation to be used"},"51":{i:0.00809600581911012,u:"../Content/Topics/x2075.html",a:"Once you have specified the FPI implementation that you wish to\n use in a given simulation (see also:  specifying the FPI\n implementation ), you must ensure that gPROMS is able to locate\n the corresponding FPI implementation file. This can be done by\n locating this file at an appropriate place in ...",t:"Locating the FPI implementation file"},"52":{i:0.0103899630776784,u:"../Content/Topics/x2102.html",a:"FPI performance considerations The issue of FPI performance is particularly important in view of\n the fact that many of its applications will operate in real-time under\n stringent timing constraints. Some of the factors that may affect this performance are considered\n in the sections:",t:"FPI performance issues"},"53":{i:0.00809600581911012,u:"../Content/Topics/x2106.html",a:"In general, the larger the model, the longer its solution will\n take! In many cases, of course, the size of the model will be determined\n by the application, and there may be little scope for reducing it.\n However, for models that are going to be used time and time again in\n critical on-line ...",t:"Effects of model size"},"54":{i:0.00809600581911012,u:"../Content/Topics/x2111.html",a:"As explained in:  Side effects of\n Get , the interaction of a gPROMS Process with the Foreign Process\n through a Get task may cause changes to the underlying model. This then\n leads to the need for re-initialisation, i.e. a calculation aiming at\n re-establishing consistent values for all variables ...",t:"Effects of model re-initialisation"},"55":{i:0.00809600581911012,u:"../Content/Topics/x2117.html",a:"By default, gPROMS records the values of all the variables in the\n model at each reporting interval, as specified in the\n Solutionparameters part of the Process in the input file: # PROCESS Example\n UNIT Plant AS BigModel\n SET\n ...\n ASSIGN\n ...\n PRESET\n ...\n INITIAL\n ...\n SOLUTIONPARAMETERS\n ...",t:"Effects of results logging"},"56":{i:0.00809600581911012,u:"../Content/Topics/x2132.html",a:"The communication between gPROMS and the FPI procedures is done\n using standard procedure calls, and usually incurs negligible costs.\n However, this may not be the case if the FPI routines then proceed to\n communicate with some other software through a different mechanism\n involving data ...",t:"Effects of FPI communication overheads"},"57":{i:0.00809600581911012,u:"../Content/Topics/x2139.html",a:"The Microsoft Excel 1 Please check the section on platform availability which versions of Excel are supported. Foreign Object and Foreign Process interfaces are designed to allow gPROMS to interact dynamically with calculations performed in\n Microsoft Excel. The Microsoft Excel Foreign Object ...",t:"Introduction"},"58":{i:0.00809600581911012,u:"../Content/Topics/x2152.html",a:"Microsoft Excel Foreign Objects are specified in the gPROMS input file in the same way that other Foreign Objects are. In the gPROMS Model, a parameter must be defined as Foreign_object with the class \"ExcelFO\": PARAMETER\n    ParameterPath       AS FOREIGN_OBJECT \"ExcelFO\" The file that will be used ...",t:"Using Microsoft Excel Foreign Objects"},"59":{i:0.00809600581911012,u:"../Content/Topics/x2168.html",a:"If Microsoft Excel workbooks (.xls or .xlsx) are stored in a  Project, a conflict will arise when a gPROMS Activity is executed\n multiple times because gPROMS tries to open several copies of the (same) workbook with identical names one after the other. Microsoft Excel does not\n permit opening ...",t:"Automatic closing of Microsoft Excel workbooks"},"60":{i:0.0184188134826672,u:"../Content/Topics/x2178.html",a:"Microsoft Excel Foreign Objects are created from Excel workbooks by including method definition worksheets. The method definition worksheets\n specify, for each method: the method name; which cells are to provide the output values of the method; the names of any inputs; which cells correspond to the ...",t:"Creating Microsoft Excel Foreign Objects"},"61":{i:0.00809600581911012,u:"../Content/Topics/x2251.html",a:"Cell cross-references are specified as is normal in Excel: i.e. by typing \"=\u003csheetname\u003e!\u003crange\u003e\u0027\u0027 to specify a range from a\n particular worksheet. This can be done automatically in Excel by pressing \"=\u0027\u0027 then selecting the worksheet with the mouse, highlighting the range\n and pressing the RETURN or ...",t:"Specifying cell cross-references"},"62":{i:0.0237526682225484,u:"../Content/Topics/x2292.html",a:"Your ExcelFO installation comes with a template workbook that contains macros for generating method definition worksheets and foreign process\n worksheets. To make use of the macros, you must have the file gXLmacros.xls open while working on your Excel workbook. To run the method definition\n macro ...",t:"Using the method definition macro"},"63":{i:0.00809600581911012,u:"../Content/Topics/x2326.html",a:"To illustrate many of the features described above, we consider the trivial example of calculating the Reynold\u0027s Number for fluid flow in a\n pipe. The listing below shows excerpts from a Model where the Reynolds number is calculated using the ExcelFO Foreign Object\n interface. The physical ...",t:"A simple example"},"64":{i:0.0149778775948149,u:"../Content/Topics/x2343.html",a:"Earlier, we looked at the specification of cell ranges for arrays of one or two dimensions. One-dimensional arrays can have cell ranges\n specified as either columns or rows. Variables and parameters defined as Array( x,y) correspond to cell\n ranges which are y cells wide and x cells deep. This is ...",t:"Cell ranges for arrays with more than two dimensions"},"65":{i:0.0115369417069625,u:"../Content/Topics/x2602.html",a:"Setting up the gPROMS input file to use the Microsoft Excel FPI is very simple. All that is needed to enable the FPI is the following line in the\n Solutionparameters section: FPI := \"ExcelFP::filename\" where filename is the name of the Excel workbook to be used. Again, if the full path of the ...",t:"Using the Microsoft Excel Foreign Process Interface"},"66":{i:0.00809600581911012,u:"../Content/Topics/x2664.html",a:"As with the FOI, the Excel FPI is defined using a worksheet with a special name. ExcelFP only uses one FPI definition sheet,\n called \"gFPI\u0027\u0027. This worksheet defines each tag (the name that will be used in the gPROMS input file corresponding to\n    ForeignVariableID), its cell cross-reference, the ...",t:"Creating Microsoft Excel Foreign Processes"},"67":{i:0.00809600581911012,u:"../Content/Topics/x2686.html",a:"As with ExcelFO, there is a macro available which greatly reduces the effort in creating the FPI definition worksheet. The\n macro is available in the gXLmacros.xls file and is accessed through the Tools/Macro/Macros... menu (or press ALT+F8). Selecting\n the MakeFPsheet and pressing \"Run\u0027\u0027 will start ...",t:"Using the FPI definition macro"},"68":{i:0.00809600581911012,u:"../Content/Topics/x2692.html",a:"If gPROMS appears to have stopped working while using ExcelFO or ExcelFP then try the following: Make sure there are no dialog boxes open in Excel, and no cells are being edited. Then just select another cell in the worksheet. If\n        ExcelFO or ExcelFP have trouble talking to Excel at any point, ...",t:"Troubleshooting"},"69":{i:0.00809600581911012,u:"../Content/Topics/x2706.html",a:"Here we describe a more detailed example problem involving both the Microsoft Excel FOI and FPI. The process is a liquid-phase CSTR reactor\n involving the following reaction: A general-purpose gPROMS model for an isothermal CSTR is shown in the listing below. # MODEL LiquidPhaseCSTR\n\n PARAMETER\n ...",t:"An example problem with Microsoft Excel FOI and FPI"},"70":{i:0.00809600581911012,u:"../Content/Topics/gOPCFPI.html",a:"The OPC Foreign Process Interface gOPCFPI is designed for the easy configuration  and use of bidirectional connections for data exchange with OPC servers. This data exchange can be used for both online and offline applications. Its key features are listed below. Implementation of the standard ...",t:"Introduction"},"71":{i:0.0330957207769396,u:"../Content/Topics/gOPCFPI configuration file.htm",a:"The gOPCFPI configuration specifies all aspects of the OPC communication, namely:  What OPC server to connect to and how to communicate with it The mapping of gPROMS variables to OPC tags. The entire configuration is contained in a single clear  text file which follows the  JSON data-interchange ...",t:"gOPCFPI configuration file"},"72":{i:0.0477101639266698,u:"../Content/Topics/gOPCFPI real-time synchronisation.htm",a:"In applications such as operator training or model predictive control, the pseudo time of a gPROMS simulation must be synchronised with the real time of operation – which can be faster or slower. Evidently, synchronisation is only possible when the pseudo time of a gPROMS simulation is faster than ...",t:"gOPCFPI real-time synchronisation"},"73":{i:0.0216148442350847,u:"../Content/Topics/gOPCFPI event synchronisation.htm",a:"gOPCFPI can synchronise with events on the OPC server when tag values become larger or smaller than, or equal to a specified value. It is also possible to wait until a specified duration in real time has elapsed. The syntax for these synchronisations is as follows: PAUSE SIGNALID “ZeroTime: wait ...",t:"gOPCFPI event synchronisation"},"74":{i:0.0239088014936529,u:"../Content/Topics/gOPCFPI historian access.htm",a:"OPC servers typically offer a historian which allows access to recorded values at specified points or intervals in time. In the query below, the standard \u0027Get\u0027 syntax is extended by using the \u0027Signalid\u0027 string to define the type of historian access. GET \n  SIGNALID “PastValue:At \u003cYYYY-MM-DD ...",t:"gOPCFPI historian access"},"75":{i:0.0231216952718721,u:"../Content/Topics/c2136.html",a:"Microsoft ExcelTM Foreign Object and Foreign Process Interfaces",t:"Microsoft Excel Foreign Object and Foreign Process Interfaces"},});