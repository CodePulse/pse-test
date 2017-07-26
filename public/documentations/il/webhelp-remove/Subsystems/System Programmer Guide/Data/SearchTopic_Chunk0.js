define({"0":{i:0.00893969826435573,u:"../Content/Topics/c251.html",a:"This guide describes several advanced features of the gPROMS package. These include: The gPROMS Foreign Object Interface Foreign Objects are external software components that provide certain computational services to gPROMS Models. These include physical\n property packages, external unit operation ...",t:"Overview"},"1":{i:0.0114726139579424,u:"../Content/Topics/c271.html",a:"Foreign Objects are external software components that provide certain computational services to gPROMS Models. These include physical property\n packages, external unit operation modules, or even complete computational fluid dynamics (CFD) software packages. This guide explains how to make use of\n ...",t:"Developing New Foreign Objects"},"2":{i:0.0235672883270691,u:"../Content/Topics/x276.html",a:"This section describes the Foreign Object Interface (FOI), i.e. the protocol used for communication between gPROMS and any external software\n component that provides services via one or more callable routines. A Foreign Object provides one or more methods, each of which takes inputs from gPROMS and ...",t:"The gPROMS Foreign Object Interface"},"3":{i:0.0532570238351297,u:"../Content/Topics/x301.html",a:"At the start of executing a Process entity, gPROMS will construct a list of all distinct Foreign Object classes and their instances that are\n used by it. It then attempts to create each instance by calling the gFOI procedure of the corresponding class. The gFOI procedure has the following form: gFOI ...",t:"The Foreign Object initialisation procedure"},"4":{i:0.0290372519737709,u:"../Content/Topics/x356.html",a:"In general, gPROMS does not know a priori which methods a Foreign Object can provide nor does it know which inputs each\n method needs or which output it calculates. However, it can deduce this information from the gPROMS input file. Once the various Foreign Object\n instances are created successfully ...",t:"The Foreign Object verification procedures"},"5":{i:0.00893969826435573,u:"../Content/Topics/x361.html",a:"The first verification procedure, gFOCM, is used by gPROMS to ascertain the existence of a given method, to determine the number of inputs\n that the method expects, and to obtain detailed information on the method\u0027s output. It has the form: gFOCM (ForeignObjectID, ForeignObjectHandle, MethodName, ...",t:"Verification of method existence and structure"},"6":{i:0.00893969826435573,u:"../Content/Topics/x548.html",a:"Once the existence of a Foreign Object method is ascertained and the number of its inputs is determined, the next step for gPROMS is to\n obtain detailed information on these inputs. This is achieved via a call to the routine gFOCMI, the form of which is as follows: gFOCMI (ForeignObjectID, ...",t:"Verification of method inputs"},"7":{i:0.0290372519737709,u:"../Content/Topics/x658.html",a:"If the Foreign Object initialisation and verification are completed successfully, gPROMS proceeds with the execution of the Process under\n consideration. This requires the evaluation of the outputs of the various Foreign Object methods used in the problem for given values of their\n inputs. It also ...",t:"The Foreign Object calculation procedures"},"8":{i:0.00893969826435573,u:"../Content/Topics/x842.html",a:"As stated before, gFOMD must only return the partial derivatives of the method with respect to the one input specified\n by gPROMS in DInputName. This is because gPROMS calls for the partial derivatives separately with respect to each input: returning\n        all of the partial derivatives with ...",t:"Specifying partial derivative outputs"},"9":{i:0.00893969826435573,u:"../Content/Topics/x952.html",a:"An optional interface procedure gFOSTR allows to implement methods which are designated to return strings as output. This is essentially\n similar to the gFOM procedure except the method output parameter will be an array of strings of fixed length of 256. In typical use of this function physical ...",t:"The Foreign Object string procedure (optional)"},"10":{i:0.0290372519737709,u:"../Content/Topics/x1042.html",a:"The Foreign Object termination procedure is of the form: gFOT (ForeignObjectID, ForeignObjectHandle, Status). The arguments are as listed in the table below: Arguments of the procedure gFOT. Name of Argument Type Description Specified on Entry Specified on Exit ForeignObjectID Character*256 Full ...",t:"The Foreign Object termination procedure"},"11":{i:0.00893969826435573,u:"../Content/Topics/x1084.html",a:"Implementation of Foreign Objects This section deals with some of the details of the implementation of Foreign Object software and the precise ways in which this can be compiled\n and linked to gPROMS .",t:"Implementation of Foreign Objects"},"12":{i:0.0165384453451156,u:"../Content/Topics/x1087.html",a:"In principle, Foreign Object software can be written in any procedural language such as FORTRAN, C and C++ . Although the first two are\n perfectly adequate, at least for simple applications, special care must be taken if the problem under consideration makes use of multiple instances\n of the same ...",t:"Writing Foreign Objects"},"13":{i:0.00893969826435573,u:"../Content/Topics/x1116.html",a:"As mentioned in the section on  the gPROMS Foreign Object Interface , any Foreign Object\n implementation has to provide six service procedures. For convenience, example files are provided for both FORTRAN and C. The example files can be\n stripped of their method implementations so that they contain ...",t:"Writing Foreign Objects in FORTRAN and C"},"14":{i:0.0127390718047357,u:"../Content/Topics/x1135.html",a:"As mentioned above, C++ offers a straightforward way to implement a Foreign Object and to manage multiple instances of the same class. How to\n do this is demonstrated in detail by the provided example code 1 In order to understand these examples, at least a basic understanding of C++ and object ...",t:"Writing Foreign Objects in C++"},"15":{i:0.0127390718047357,u:"../Content/Topics/x1191.html",a:"gPROMS employs a dynamic loading mechanism that allows it to load Foreign Object code and make use of its services without\n the need for a separate linking step. Standardised dynamic loading facilities are nowadays available under both the UNIX and MS Windows operating\n systems. These provide direct ...",t:"Compiling Foreign Objects"},"16":{i:0.00893969826435573,u:"../Content/Topics/x1199.html",a:"Once the code describing the Foreign Object class is written and compiled as explained in the sections on  Writing Foreign Objects  and  Compiling Foreign Objects , the\n resulting dynamic library has to be installed in a place where gPROMS can find it during runtime. There are three main options for ...",t:"Installing Foreign Objects"},"17":{i:0.00893969826435573,u:"../Content/Topics/x1214.html",a:"The information that users of Foreign Objects need to know in order to use them correctly within gPROMS is listed in the chapter on Using Foreign Objects in the guide on Foreign Objects and Foreign Processes. We\n recommend that, as a Foreign Object developer, you base the documentation of your ...",t:"Documenting Foreign Object classes"},"18":{i:0.0114726139579424,u:"../Content/Topics/c1218.html",a:"The Foreign Process Interface (FPI) allows gPROMS simulations to interact with external software such as distributed control systems and operator\n training packages in order to exchange data and other information. The interaction takes the form of a special set of elementary actions within the\n ...",t:"Developing New Foreign Processes"},"19":{i:0.0197890209146075,u:"../Content/Topics/x1261.html",a:"By placing the FPI elementary communication tasks within simulation\n Schedules, the user can specify the timing and nature of the information exchanges that are to take place between the executing gPROMS Process and the\n foreign process. The actual communication takes place by gPROMS issuing calls ...",t:"The FPI communication protocol"},"20":{i:0.196501776959188,u:"../Content/Topics/x1279.html",a:"Purpose: To initialise the communication link between the gPROMS\n Process and the foreign process. Invoked: Automatically, at the start of the execution of any gPROMS\n Process. PROCEDURE DECLARATION SUBROUTINE gFPI (FPID, FPHANDLE, PRNAME, STATUS)\nCHARACTER * 256 FPID, PRNAME\nINTEGER FPHANDLE ...",t:"The gFPI procedure"},"21":{i:0.0507007080699331,u:"../Content/Topics/x1347.html",a:"Purpose: To carry out any Pause tasks in the simulation Schedule, as\n detailed in the section on the Pause elementary communication\n task. Invoked: Whenever a Pause elementary communication task is executed\n in a Schedule. PROCEDURE DECLARATION SUBROUTINE gFPPAUSE (FPID, FPHANDLE, PRNAME,\n+ SIGNAL, ...",t:"The gFPPAUSE procedure"},"22":{i:0.0507007080699331,u:"../Content/Topics/x1417.html",a:"Purpose: To carry out any Get tasks in the simulation Schedule, as\n detailed in the section on the Get elementary communication\n task. Invoked: Whenever a Get elementary communication task is executed in\n a Schedule. PROCEDURE DECLARATION SUBROUTINE gFPGET (FPID, FPHANDLE, PRNAME, SIGNAL,\n+ TIME, N, ...",t:"The gFPGET procedure"},"23":{i:0.0507007080699331,u:"../Content/Topics/x1520.html",a:"Purpose: To carry out any Send tasks in the simulation Schedule, as\n detailed in the section on the Send elementary communication\n task. Invoked: Whenever a Send elementary communication task is executed in\n a Schedule. PROCEDURE DECLARATION SUBROUTINE gFPSEND (FPID, FPHANDLE, PRNAME, SIGNAL,\n+ ...",t:"The gFPSEND procedure"},"24":{i:0.0507007080699331,u:"../Content/Topics/x1622.html",a:"Purpose: To carry out any SENDMATHINFO tasks in the simulation\n Schedule, as detailed in the section on the SENDMATHINFO\n elementary communication task. Invoked: Whenever a SENDMATHINFO elementary communication task is\n executed in a Schedule. PROCEDURE DECLARATION SUBROUTINE gFPSENDM (FPID, ...",t:"The gFPSENDM procedure"},"25":{i:0.00893969826435573,u:"../Content/Topics/x1773.html",a:"Purpose: To carry out any Linearise task in the simulation, as\n detailed in the section on the Linearise elementary\n communication task. Invoked: Whenever a Linearise elementary communication task is\n executed in a Schedule. PROCEDURE DECLARATION SUBROUTINE gFPLINEARISE (FPID, FPHANDLE, PRNAME, ...",t:"The gFPLINEARISE procedure"},"26":{i:0.00893969826435573,u:"../Content/Topics/x1937.html",a:"Purpose: To terminate the communication link between the gPROMS\n Process and the foreign process. Invoked: Automatically, at the end of the execution of any gPROMS\n Process. PROCEDURE DECLARATION SUBROUTINE gFPT (FPID, FPHANDLE, PRNAME, STATUS)\nCHARACTER * 256 FPID, PRNAME\nINTEGER FPHANDLE\nINTEGER ...",t:"The gFPT procedure"},"27":{i:0.0121902738338476,u:"../Content/Topics/x1998.html",a:"In many FPI applications (e.g. model-based control), it is essential for the gPROMS simulation to keep up with real time. There are several\n factors that may slow down the simulation. If this takes place to the extent that the simulation is slower than the real plant, performance issues\n clearly ...",t:"FPI implementation for real-time applications"},"28":{i:0.0257603752171311,u:"../Content/Topics/x2014.html",a:"Implementation of Foreign Processes This section deals with some of the details of the implementation of Foreign Processes and the precise ways in which this can be compiled and\n linked to gPROMS.",t:"Implementation of Foreign Processes"},"29":{i:0.00893969826435573,u:"../Content/Topics/x2017.html",a:"As mentioned in the section on the  FPI communication protocol , any Foreign Process\n implementation has to provide five communication procedures and two procedures for initialisation and termination of Foreign Processes. In order to demonstrate the implementation of these procedures, examples are ...",t:"Writing Foreign Processes in FORTRAN and C"},"30":{i:0.00893969826435573,u:"../Content/Topics/x2039.html",a:"Although using C or FORTRAN as the implementation language should be sufficient for many applications, C++ may be more appropriate in more\n advanced cases, e.g. if you wish to connect multiple gPROMS Processes to one Foreign Process. In this case, the reasons outlined in the section on\n       ...",t:"Writing Foreign Processes in C++"},"31":{i:0.0121902738338476,u:"../Content/Topics/x2095.html",a:"gPROMS employs a dynamic loading mechanism that allows it to load users\u0027 FPI code into the gPROMS address space at\n run-time. To make dynamic loading possible, users\u0027 FPI implementations must be implemented as dynamic shared object libraries on UNIX systems, or as\n dynamic link libraries on MS ...",t:"Compiling Foreign Processes"},"32":{i:0.00893969826435573,u:"../Content/Topics/x2102.html",a:"Once the Foreign Process code has been written and compiled as explained in the previous sections, the resulting dynamic library has to be\n installed in a place where gPROMS can find it during runtime.  There are three main options for this: In a sub-directory called \"fpi\" of the gPROMS installation ...",t:"Installing Foreign Processes"},"33":{i:0.0223008304802758,u:"../Content/Topics/c2116.html",a:"The Output Channel Interface (OCI) allows gPROMS to communicate its simulation results to external software components. This open interface means\n that users can develop their own software which will have access to the large quantity of results information generated by gPROMS. A gPROMS Output ...",t:"Developing new gPROMS Output Channels"},"34":{i:0.00893969826435573,u:"../Content/Topics/x2121.html",a:"Three standard Output Channel components are distributed with gPROMS. These are dynamic shared libraries implementing the Output Channel\n Interface. The first is gRMS, which is a general result management system that allows the user to display simulation results quickly in the form of 2D\n and 3D ...",t:"Using Output Channels in gPROMS"},"35":{i:0.00893969826435573,u:"../Content/Topics/x2145.html",a:"This section describes the Output Channel Interface (OCI), i.e. the protocol used for communication between gPROMS and any Output Channel\n         component that provides results manipulation via one or more callable procedures. The information presented here will typically be of interest to\n        ...",t:"The gPROMS Output Channel Interface"},"36":{i:0.00893969826435573,u:"../Content/Topics/x2159.html",a:"At the start of the execution of a Process entity, gPROMS will try to create instances for all the Output Channels which are switched ON in the\n Solutionparameters section of the process. Upon successful loading of the dynamic shared library corresponding to the Output Channel, gPROMS will\n request ...",t:"The initialisation procedure"},"37":{i:0.00893969826435573,u:"../Content/Topics/x2203.html",a:"If the initialisation of the Output Channel is successful, gPROMS will then attempt to register with the Output Channel all the distribution\n domains over which monitored variables are distributed, and integer parameters and constants which are used to declare arrays of variables by making\n calls to ...",t:"The register distribution domain procedure"},"38":{i:0.0165384453451156,u:"../Content/Topics/x2307.html",a:"After all the relevant distribution domains and parameters have been successfully registered with the Output Channel, gPROMS will then register\n all monitored variables with the Output Channel by making calls to the gOCRV procedure. The gOCRV procedure has the following form: gOCRV(OutputChannelID, ...",t:"The register variable procedure"},"39":{i:0.00893969826435573,u:"../Content/Topics/x2373.html",a:"After the successful initialisation and registration of all relevant distribution domains and monitored variables, gPROMS notifies the Output\n Channel of the completion of this initial process. This is achieved by calling the gOCFIN procedure. At this point, the Output Channel can adjust the\n ...",t:"The finish initialisation procedure"},"40":{i:0.00893969826435573,u:"../Content/Topics/x2413.html",a:"At every reporting interval during the simulation, the integration time is sent to the Output Channel by calling the gOCTIME procedure. The gOCTIME procedure has the following form: gOCTIME(OutputChannelID, OutputChannelHandle, Time, Status) where the arguments are described in the table below. ...",t:"The time reporting procedure"},"41":{i:0.0229973842282628,u:"../Content/Topics/x2459.html",a:"After the reporting time is sent, gPROMS will send the current values of every monitored variable by making calls to the gOCVALUE\n procedure. The gOCVALUE procedure has the following form: gOCVALUE(OutputChannelID, OutputChannelHandle, VariableIndex,\n NoValues, ValueList, Status) where the arguments ...",t:"The variable values reporting procedure"},"42":{i:0.00893969826435573,u:"../Content/Topics/x2519.html",a:"To support the Resetresults elementary task, the Output Channel should define the\n gOCRESET procedure to do whatever is appropriate. The Output Channel implementations provided as standard within gPROMS use this procedure to remove\n all the times and variable values stored for those times but ...",t:"The reset results procedure"},"43":{i:0.00893969826435573,u:"../Content/Topics/x2560.html",a:"At the end of Process execution, gPROMS will close all Output Channels that are currently active by calling their gOCT procedures. This is\n intended to provide the Output Channels with an opportunity to do any necessary housekeeping. The gOCT procedure has the following form: gOCT(OutputChannelID, ...",t:"The termination procedure"},"44":{i:0.00893969826435573,u:"../Content/Topics/x2600.html",a:"Implementation of Output Channels This section deals with some of the details of the implementation of Output Channels and the precise ways in which this can be compiled and\n linked to gPROMS.",t:"Implementation of Output Channels"},"45":{i:0.0127390718047357,u:"../Content/Topics/x2603.html",a:"As described in the section on  the gPROMS Output Channel Interface , any Output Channel\n implementation has to provide six communication procedures and two procedures for initialisation and termination respectively. For convenience,\n skeleton files are provided for both FORTRAN and C. The skeletons ...",t:"Writing Output Channels in FORTRAN and C"},"46":{i:0.0127390718047357,u:"../Content/Topics/x2620.html",a:"gPROMS employs a dynamic loading mechanism that allows it to load users\u0027 OCI code into the gPROMS address space at\n run-time. To make dynamic loading possible, users\u0027 OCI implementations must be implemented as dynamic shared object libraries on UNIX systems, or as\n dynamic link libraries on Windows ...",t:"Compiling Output Channels"},"47":{i:0.00893969826435573,u:"../Content/Topics/x2627.html",a:"Once the code describing the Output Channel has been written and compiled as explained in the sections on  writing Output Channels in FORTRAN and C  and  compiling\n Output Channels , the resulting dynamic library has to be installed in a place where gPROMS can find it during runtime. There are three ...",t:"Installing Output Channels"},});