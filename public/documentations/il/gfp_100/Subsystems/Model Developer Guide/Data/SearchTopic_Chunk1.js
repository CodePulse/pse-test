define({"75":{i:0.00174487739059874,u:"../Content/Topics/x2957.html",a:"Occasionally, it will be necessary to write expressions involving of arrays of units and/or slices of arrays of units (i.e. a subset of the\n elements of an array – see  Referring to array elements ). The rules governing expressions involving arrays of\n units are similar to those governing array ...",t:"Expressions involving arrays of Units"},"76":{i:0.00506272135352567,u:"../Content/Topics/x3144.html",a:"It is usually recommended that the values of all unknown Model quantities are provided in Process entities (See also:\n     Defining Process Entities ), where: Parameter values are fixed in the SET section Variables are specified in the ASSIGN section Initial conditions are provided in the INITIAL ...",t:"Model specifications"},"77":{i:0.00462876431305419,u:"../Content/Topics/x3199.html",a:"Before any Model based activity is executed in gPROMS the values of all Parameters (even if not used) must be resolved. A Parameter\u0027s value\n must have been determined in one of the following ways: Explicit Parameter specification : to Set a Parameter to either to a literal value or to another\n ...",t:"Setting Parameter values in Composite Models"},"78":{i:0.00774038179275904,u:"../Content/Topics/x3220.html",a:"The Parameters included in Connection Types can be set explicitly like regular Model Parameters. However, their values are usually\n obtained from topology connections and  Port Sets : Topology connections: when a connection between two Ports is made the equivalent Parameters in these\n Ports are ...",t:"Setting Connection Type Parameters"},"79":{i:0.00174487739059874,u:"../Content/Topics/x3238.html",a:"As an example of the use of Port Sets, consider the PML Flowsheet shown below.  Reactor Flowsheet Each of the connector Models in this Flowsheet (pumps, reactor and valves) have common Port Sets linking their inputs to their\n outputs. This is shown for the reactor Model below.  Reactor Port Sets ...",t:"Example of Parameter Propagation with Port Sets"},"80":{i:0.0030563997180346,u:"../Content/Topics/x3283.html",a:"As well as the propagation of Connection Type Parameters along stream paths the values of Model Parameters can propagate from higher- to\n lower-level Models. For example, a Parameter that corresponds to the number of components (e.g. NoComp) may well be present in the higher-level Model of a\n ...",t:"Implicit Parameter Propagation"},"81":{i:0.00174487739059874,u:"../Content/Topics/c3318.html",a:"You should be familiar with the use of  Arrays  before proceeding further. gPROMS allows the use of Ordered Sets as array indices, in addition to simple integer indices. These substantially increase the descriptive power\n of the modeling language because they allow the user to use strings to ...",t:"Ordered Sets"},"82":{i:0.00193027477411964,u:"../Content/Topics/x3354.html",a:"The Ordered Set is a type of Parameter and is therefore declared in the PARAMETER section of your gPROMS Model. They are declared as follows: PARAMETER \n Gases, Liquids, Species AS ORDERED_SET\n  As with other Parameters, the values are defined in the set section. In the case of Ordered Sets, it is ...",t:"Declaring Ordered Sets"},"83":{i:0.00193027477411964,u:"../Content/Topics/x3371.html",a:"Each of these types of entity are declared in a very similar way to Arrays over  integer domains . So for Parameters\n the declaration is: PARAMETER\n FormulaWeight AS ARRAY(Species) OF REAL\n  As with Arrays generally, multiple dimensions are possible. For example, if an Ordered Set Reactions had also ...",t:"Declaring Arrays of Parameters, Variables and Units"},"84":{i:0.00357104587539629,u:"../Content/Topics/x3391.html",a:"Ordered Set Operations and Referencing Rules The following features may be used when developing a Model containing Ordered Sets: Set Operations Referencing Rules Built-in Functions Intrinsic Functions",t:"Ordered Set Operations and Referencing Rules"},"85":{i:0.00250374363083263,u:"../Content/Topics/x3407.html",a:"The allowed set operations are: Union, defined by + example:  Species := Gases + Liquids ; Intersection, defined by * example:  Intermediates := Gases * Liquids ; Set difference, defined by - example:  NonCondensibles := Gases – Liquids ; For Union and Intersection, there are variants that take an ...",t:"Set Operations"},"86":{i:0.0029139364061518,u:"../Content/Topics/x3446.html",a:"In Parameter specifications, Equations and Assign statements, one may refer to individual elements, slices or the whole Array, as in the case\n of  integer domains . Of course, rather than using integers to refer to individual elements or define slices, the names\n of the elements in the Ordered Sets ...",t:"Ordered Set Referencing Rules"},"87":{i:0.00250374363083263,u:"../Content/Topics/x3470.html",a:"The summation operator,  SIGMA , is defined over the Ordered Set, e.g. SIGMA(x(Species)) = 1 ; The integral operator,  INTEGRAL , is also defined over an Ordered Set, e.g.: INTEGRAL(s OVER QuadPoints ; x(s)*y(s)) = 100.0 ; where QuadPoints is the Ordered Set. Slices and set operations within ...",t:"Built-in Functions"},"88":{i:0.00250374363083263,u:"../Content/Topics/x3488.html",a:"A number of intrinsic functions are defined for Ordered Set Parameters. The first element of an Ordered Set is returned as a string by: OrderedSetParam.First  The last element of an Ordered Set is returned as a string by: OrderedSetParam.Last  The Cardinality (i.e. the size) of an Ordered Set is ...",t:"Ordered Set Intrinsic Functions"},"89":{i:0.0031687289240117,u:"../Content/Topics/x3515.html",a:"Here, we have a database of molecular weights from which we will copy some into a smaller list of components: PARAMETER \n ReagentSpecies, ProcessSpecies, AllSpecies AS ORDERED_SET\n \nVARIABLE\n MW AS ARRAY(AllSpecies) OF MolWt\n MWsub AS ARRAY(ReagentSpecies) OF MolWt\n\nSET \n ReagentSpecies := [\u0027HNO3\u0027, ...",t:"Examples of the Use of Ordered Sets"},"90":{i:0.00174487739059874,u:"../Content/Topics/x3543.html",a:"Ordered Sets can be specified in Model  specification dialogs  just as any other Parameter. The elements\n of the Ordered Set can be entered by the user and these will then affect the input tables of any Parameters or Variables that depend on the Ordered\n Set. In the example below, we have model of a ...",t:"Ordered Sets in Model Specification Dialogs"},"91":{i:0.00174487739059874,u:"../Content/Topics/c3572.html",a:"Providing a Model with a Public Interface allows it to be used quickly and easily on the topology tab of flowsheet\n Models. The Model Interface has four key facets: A Model icon  which determines how the Model is displayed on the topology tab of flowsheet\n Models. Model Ports  to allow connections ...",t:"Defining a Public Model Interface"},"92":{i:0.00211567215764054,u:"../Content/Topics/x3598.html",a:"The Model icon determines how an instance of the Model is displayed on the topology tab of a flowsheet Model. It is\n possible to associate any icon of your choice with a particular Model. To do so, you need to do the following: On the interface tab the Model entity click on the Select icon button ...",t:"Defining a Model icon"},"93":{i:0.0274305443902882,u:"../Content/Topics/x3634.html",a:"Topology connections to and from a Unit are made from its Ports. These are configured from the Port table in the lower pane of the\n    Interface tab:  The Port table The Port table shows the following information: Portname: the name by which the Port will be referenced in the gPROMS language. ...",t:"Defining Model Ports"},"94":{i:0.00563108199111892,u:"../Content/Topics/x3735.html",a:"Click on the Add button to define a new Port, or click the Edit button to modify an existing\n\t\tPort. This will activate a Create Port (or Edit Port) dialog box:  Creating a new Port Port name Enter the name of the Port. Connection type Choose the  Connection Type  from a drop down menu ...",t:"Create a new Port"},"95":{i:0.00174487739059874,u:"../Content/Topics/x3805.html",a:"All Ports defined using the Interface tab, are reflected on the Model\u0027s gPROMS Language tab with the following\n syntax: PORT\n\n  PortName AS ConnectionType\n\n PortName AS ARRAY (Size \u003c,\u003e) OF ConnectionType. Port sets  are also reflected on the Model\u0027s gPROMS Language tab with the following\n syntax ...",t:"Ports and the gPROMS Language"},"96":{i:0.00359885122580774,u:"../Content/Topics/x3832.html",a:"A Model is defined both by its Equations and the specifications that must be provided to satisfy its  degrees of freedom . In gPROMS, the required set of specifications and the initial conditions for a Model can be stored\n with that Model. These are then accessed via its Specification dialog, as ...",t:"Defining a Specification dialog and Model Reports"},"97":{i:0.0114929761927421,u:"../Content/Topics/x3907.html",a:"Step 1 The first step is to specify, from the full set of Parameters, Variables and Selectors declared by the Model (the Model\n symbols), a sub-set which shall be exported as Public Model Attributes (PMA).\n These are essentially those that will appear on a Specification dialog or on a Model\n report. ...",t:"Defining Public Model Attributes"},"98":{i:0.00289358210279303,u:"../Content/Topics/x3974.html",a:"Step 2 The Specification dialog can have any number of tabs (including zero); these can be given appropriate names. Tabs are typically used to group similar PMAs together and, equally, to separate dissimilar quantities. For example, it is common to put\n Variable Assignments on one tab, ...",t:"Specifications dialog tabs"},"99":{i:0.00225472729047569,u:"../Content/Topics/x3995.html",a:"Step 3 Model specifications are given in terms of the  Public Model Attributes  (PMAs); these are accessed by the Model\n user from the Specification dialog. Following the identification of the\n PMAs in Step 1, the following additional information must be provided to configure the behaviour of the ...",t:"Configure specification dialog"},"100":{i:0.00225472729047569,u:"../Content/Topics/x4090.html",a:"Step 4 A Help button can be added to the public Model interface. Help can be provided in two different ways or disabled according to the\n selection made using the listbox in step 4 of the Public Model Interface Builder dialog: When Opens a help window is selected, the dialog changes to include a ...",t:"Defining Model help"},"101":{i:0.00262552205751749,u:"../Content/Topics/x4152.html",a:"Stage 5 Model reports are used to present key results in a clear format following a Simulation activity (see also: Viewing Model reports). There are three ways to configure the reports for a Model. These are: None – no report for the Model will be generated. Basic  – a basic tabular report for the ...",t:"Defining custom reports"},"102":{i:0.00357739819707175,u:"../Content/Topics/x4176.html",a:"Basic report configuration The basic tool for configuring model reports enables you to select variables for inclusion in the report in tabular form only. Check the\n boxes of all the variables you wish to appear in the report and then click Finish to complete the configuration. If you want to include ...",t:"Basic Report Configuration"},"103":{i:0.00590162294218462,u:"../Content/Topics/x4188.html",a:"Advanced report configuration is achieved using xml. In addition to standard HTML tags, so that headings, images 1 The following image formats are supported in Model reports: .gif, .jpg (and .jpeg) and .png. They can be inserted into model reports\n using the standard \u003cimg src=\"\"/\u003e tag, e.g.:  and ...",t:"Advanced Report Configuration"},"104":{i:0.00246152394548629,u:"../Content/Topics/x4222.html",a:"The following simple tags may be used when developing Model Reports. \u003cPMA_UNIT\u003e displays the unit name. \u003cPMA_NAME id=\"...\"\u003e displays the PMA name of the PMA specified by the id\n              attribute. \u003cPMA_UOM id=\"...\"\u003e displays the units of measurement for the PMA specified by the id\n              ...",t:"Simple Tags"},"105":{i:0.00341323619038249,u:"../Content/Topics/x4241.html",a:"Tables can be included in a Model report using two xml tags. The first, \u003cPMA_TABLE\u003e, creates the table; the\n second, \u003cAttribute/\u003e, specifies a variable for inclusion in the table. There may be multiple\n          \u003cAttribute/\u003e tags within a \u003cPMA_TABLE\u003e tag to form a table containing as many variables ...",t:"Tables"},"106":{i:0.00842477805765694,u:"../Content/Topics/x4373.html",a:"2D Plots are created using the \u003cPlot2D\u003e tag and lines specified with the \u003cLine/\u003e tag. The basic format\n is: \u003cPlot2D version=\"1\"\u003e\n \u003cLine idY=\"\"/\u003e\n\u003c/Plot2D\u003e The version attribute of the \u003cPlot2D\u003e tag is mandatory and must be equal to 1. Each \u003cLine/\u003e tag specifies which Variable is to be plotted against ...",t:"2D Plots"},"107":{i:0.00246152394548629,u:"../Content/Topics/x4433.html",a:"x-y plots are essentially a special case of the  2D Plot . The difference\n is simply that a 2D Plot displays the values of one or more Variables against one of the independent domains; whereas an x-y plot displays\n the values of one Variable against another Variable. (As with 2D plots, you could ...",t:"x-y Plots"},"108":{i:0.00455387408100742,u:"../Content/Topics/x4463.html",a:"For Variables that are defined over two or more independent domains (including time), 3D plots may be generated using the\n          \u003cPlot3D\u003e construct and its associated \u003cSurface/\u003e tag. The basic format is: \u003cPlot3D version=\"1\"\u003e\n \u003cSurface id=\"\"/\u003e\n\u003c/Plot3D\u003e where the string specified in the id ...",t:"3D Plots"},"109":{i:0.00174487739059874,u:"../Content/Topics/x4486.html",a:"It is often necessary to adjust the orientation of a 3D plot to show the shape of the surface more clearly. This can be achieved\n using the \u003cRotation/\u003e tag within the \u003cPlot3D\u003e construct. This allows the user to specify\n the orientation of the plot by using standard rotations about each of the ...",t:"3D Plot Orientation"},"110":{i:0.00246152394548629,u:"../Content/Topics/x4506.html",a:"Contour plots are a special case of  3D plots  in which no 3-dimensional\n surface is plotted but where the contour lines are projected onto the x-y-area. The example below shows the temperature at the exit of a\n tubular reactor.  Example of a contour plot The xml code for defining this plot looks as ...",t:"Contour plots"},"111":{i:0.00174487739059874,u:"../Content/Topics/Conditional Model reports.htm",a:"The appearance of all of the elements that can be part of a report can be made dependent of logical conditions. In the simple example below, a text and its colour depend on the test if a temperature has crossed a threshold. \u003cConditional\u003e\n   \u003cIf expr=\"temperature_maximum .gt. Tlimit\"\u003e\n     \u003cp ...",t:"Conditional Model reports"},"112":{i:0.00174487739059874,u:"../Content/Topics/x4522.html",a:"Formatting options Each of the environments for creating different types of Model Report have a number of tags for specifying how they should be\n formatted. Formatting options for \u003cPMA_TABLE\u003e Formatting options for \u003cPlot2D\u003e Formatting options for \u003cPlot3D\u003e Tags can be used in two ways, depending on ...",t:"Formatting Options"},"113":{i:0.00223927041332114,u:"../Content/Topics/x4543.html",a:"The \u003cPMA_TABLE\u003e tag has a number of attributes that specify how the table will look in the report. These are described in the\n table below. Where there are only a certain number of allowable values for the attribute, these are listed inside brackets, separated by\n pipes. E.g. [true|false] means that ...",t:"Formatting options for \u003cPMA_TABLE\u003e"},"114":{i:0.0148802570131818,u:"../Content/Topics/x4682.html",a:"The \u003cPlot2D\u003e tag has a number of attributes that specify how the graph will look in the report. These are described in the\n table below. Where there are only a certain number of allowable values for the attribute, these are listed inside brackets, separated by\n pipes. E.g. [true|false] means that an ...",t:"Formatting options for \u003cPlot2D\u003e"},"115":{i:0.0148802570131818,u:"../Content/Topics/x5015.html",a:"The \u003cPlot3D\u003e tag has a number of attributes that specify how the graph will look in the report. These are\n described in the table below. Where there are only a certain number of allowable values for the attribute, these are listed inside\n brackets, separated by pipes. E.g. [true|false] means that an ...",t:"Formatting options for \u003cPlot3D\u003e"},"116":{i:0.00269658963549494,u:"../Content/Topics/x5284.html",a:"The id, idX and idY attributes effectively define a set of data. A valid id\n consists of a valid variable name followed by parameters (comma delimited within parenthases) with the first parameter beginning\n \"TIME=\". For a 2D or x-y plot, \"#\" denotes the independent domain. For a 3D plot,\n \"#x\" and ...",t:"Format of the id, idX and idY attributes"},"117":{i:0.00174487739059874,u:"../Content/Topics/x5371.html",a:"Custom graphics allow placing images at the top and the bottom of a dialog, for instance in order to provide them with a company\u0027s\n branding. The following image formats are supported: .gif, .jpg (and .jpeg), .png and .svg. The controls in this part of the interface builder allow adding or removing ...",t:"Defining custom graphics"},"118":{i:0.0191846407405193,u:"../Content/Topics/c5411.html",a:"Schedules are used in gPROMS to define operating procedures. An operating procedure can be considered as a recipe that defines periods of\n undisturbed operation along with specified or conditional external disturbances to the system. The Schedule section is the last part\n of the Process entity (for ...",t:"Defining Schedules"},"119":{i:0.00455896218891665,u:"../Content/Topics/x5454.html",a:"There are two main ways to build a Schedule: using the graphical interface or by entering gPROMS language. The former is by far the most\n         convenient and is described here. The gPROMS language for Schedules is covered in the following sections, describing the Tasks in detail. To begin ...",t:"Building a Schedule"},"120":{i:0.00222928846154507,u:"../Content/Topics/x5858.html",a:"When the Schedule tab is selected, the toolbar below will be visible.  Schedule Tab Toolbar This contains 3 sets of controls. The first is the overview control. When this button is pressed, an additional pane will be inserted between the Project tree (or Task palette,\n if this is selected instead) ...",t:"The Schedule Tab Toolbar"},"121":{i:0.00630284204432345,u:"../Content/Topics/x5897.html",a:"Elementary tasks The following elementary tasks that can be used to define \"what to do\" during a gPROMS simulation: Reassign Switch Replace Reinital Continue",t:"Elementary tasks"},"122":{i:0.00626717993253191,u:"../Content/Topics/x5920.html",a:"The Reassign elementary task Model Variables can be Assigned values which can be either fixed or dependent on the simulation time using expressions containing the Time\n statement. Such Assignments can be changed using the Reassign 1 Prior to gPROMS v3.3, the Reassign elementary Task was called Reset ...",t:"The Reassign (Reset) elementary task"},"123":{i:0.00174487739059874,u:"../Content/Topics/x5956.html",a:"In the  Assign section of a Process  a Variable value can be made dependent on the simulation time by using the\n        TIME function ASSIGN \n T101.Fin := 20 + 1.2*TIME ;  The Reassign elementary task can be used to change this Assignment in a Schedule in the same way as for all other Assignments. ...",t:"Using the TIME function in a Reassign"},"124":{i:0.00174487739059874,u:"../Content/Topics/x5973.html",a:"When inserting or modifying a Reassign Task using the graphical Schedule interface, the following Task configuration dialog is used.  Reassign Task configuration dialog This dialog contains a list of all of the Variables that are to be Reassign by the Task. To add a new Variable to the list, left ...",t:"The Reassign Task configuration dialog"},"125":{i:0.00281641072525117,u:"../Content/Topics/x6000.html",a:"Similar to the Reassign task, the Switch task may be used to alter the value of Selector Variables. Manipulation of a  Selector  state by a Switch task forces the underlying model to change state as a result of an external action as opposed to\n a physico-chemical mechanism. Applications include the ...",t:"The Switch elementary task"},"126":{i:0.00174487739059874,u:"../Content/Topics/x6017.html",a:"When inserting or modifying a Switch Task using the graphical Schedule interface, the following Task configuration dialog is used.  Switch Task configuration dialog This dialog contains a list of all of the Selector Variables that are to be Switched by the Task. To add a new Selector Variable to the ...",t:"The Switch Task configuration dialog"},"127":{i:0.00281641072525117,u:"../Content/Topics/x6050.html",a:"The Replace elementary task \u0027unAssigns\u0027 an input variable (leaving it free to vary) and Assigns a different one in its place. An interesting\n application of the Replace task is the automatic calculation of the steady-state bias of a controller. In order to determine the bias, a steady-state\n ...",t:"The Replace elementary task"},"128":{i:0.00174487739059874,u:"../Content/Topics/x6056.html",a:"When inserting or modifying a Replace Task using the graphical Schedule interface, the following Task configuration dialog is used.  Replace Task configuration dialog This dialog contains a list of all of the Assigned Variables that are to be Replaced by the Task and a list of replacement ...",t:"The Replace Task configuration dialog"},"129":{i:0.00281641072525117,u:"../Content/Topics/x6083.html",a:"Both the Reassign and Replace elementary tasks introduce discontinuities in the simulation. Although these discontinuities may affect the\n values of input and/or algebraic variables, they do not normally affect the values of differential variables. The latter usually represent quantities\n that are ...",t:"The Reinitial elementary task"},"130":{i:0.00174487739059874,u:"../Content/Topics/x6099.html",a:"When inserting or modifying a Reinitial Task using the graphical Schedule interface, the following Task configuration dialog is used.  Reinitial Task configuration dialog This dialog contains a list of all of the differential Variables that are to be Reinitialised by the Task and a list of new ...",t:"The Reinitial Task configuration dialog"},"131":{i:0.00281641072525117,u:"../Content/Topics/x6130.html",a:"The execution of all elementary tasks described so far takes place instantaneously with respect to the simulation clock. The Continue\n elementary task provides the mechanism by which periods of undisturbed operation between discrete actions can be specified. We have already used the\n      CONTINUE ...",t:"The Continue elementary task"},"132":{i:0.00174487739059874,u:"../Content/Topics/x6165.html",a:"When inserting or modifying a Continue Task using the graphical Schedule interface, the following Task configuration dialog is used.  Continue Task configuration dialog This dialog contains two text boxes, at least one of which must contain a valid entry. The first box may contain a number or an ...",t:"The Continue Task configuration dialog"},"133":{i:0.00174487739059874,u:"../Content/Topics/x6192.html",a:"The Stop elementary task Stop is a simple elementary tasks that may be used to halt a simulation (perhaps in conjunction with a  conditional statement ) The syntax for STOP is: STOP There is no configuration dialog for the Stop Task as no further information is required.",t:"The Stop elementary task"},"134":{i:0.00455896218891665,u:"../Content/Topics/x6199.html",a:"Having discussed the elementary tasks that define \"what to do\", we now introduce the following timing statements that describe \"how/when\" to do\n something: Sequence Parallel If While These are combined with the  elementary tasks  to create complex operating procedures.",t:"Specifying the relative timing of multiple tasks"},"135":{i:0.00251993510411287,u:"../Content/Topics/x6220.html",a:"Sequential execution begins with the first task and only proceeds to the next task when execution of the preceding task has terminated.\n Sequential execution of a series of tasks is specified by enclosing them within a Sequence structure. The execution of a Sequence structure is\n complete when the ...",t:"Sequential execution – Sequence"},"136":{i:0.00251993510411287,u:"../Content/Topics/x6265.html",a:"Tasks to be executed in parallel are enclosed within a Parallel structure. Execution of all tasks begins simultaneously and proceeds\n concurrently. The execution of a Parallel structure is completed when all tasks have terminated. The gPROMS code below\n demonstrates the use of concurrent tasks in ...",t:"Concurrent execution – Parallel"},"137":{i:0.00400311417228007,u:"../Content/Topics/x6284.html",a:"In many circumstances, the correct external actions to apply to a system cannot be fully determined a priori and must be\n established from decisions that can only be made while the simulation is in progress. For instance, consider a batch operation involving a series of\n elementary processing steps ...",t:"Conditional execution – If"},"138":{i:0.00251993510411287,u:"../Content/Topics/x6327.html",a:"Many processing systems are characterised by the repetitive nature of external actions required to achieve the desired operation. For example,\n periodic processes, such as pressure swing or temperature swing adsorption, are usually brought to and maintained at a \u0027cyclic steady-state\u0027 by a\n sequence ...",t:"Iterative execution – While"},"139":{i:0.00455896218891665,u:"../Content/Topics/x6368.html",a:"The  \"what to do\" elementary tasks  influence the numerical results of a simulation (e.g. Reassign changes the\n value of a degree of freedom, thereby changing the results of the simulation). We now consider the following useful \"result control\" elementary tasks\n that influence the generation of ...",t:"Result control elementary tasks"},"140":{i:0.0027136995324914,u:"../Content/Topics/x6384.html",a:"Message is a simple elementary tasks that may be used to write a message to the screen. The syntax for MESSAGE\n      is: MESSAGE \"text\" When using the graphical interface, the Task configuration dialog for the Message Task is used to specify the message text:  Message Task configuration dialog ...",t:"The message elementary task"},"141":{i:0.00786821624520421,u:"../Content/Topics/x6400.html",a:"Normally, during a gPROMS simulation the values of all variables at each reporting interval are sent to the Output Channel in order to be plotted. The Monitor task may be used to restrict the amount of data that is sent, and\n may be useful for a number of reasons: For large distributed models, which ...",t:"The Monitor elementary task"},"142":{i:0.00174487739059874,u:"../Content/Topics/x6478.html",a:"When inserting or modifying a Monitor Task using the graphical Schedule interface, the following Task configuration dialog is used.  Monitor Task configuration dialog The Monitor Task configuration dialog allows one to turn monitoring off or on, or to specify a monitoring frequency. Only one option ...",t:"The Monitor Task configuration dialog"},"143":{i:0.0027136995324914,u:"../Content/Topics/x6490.html",a:"The RESETRESULTS may be used in the Schedule section of Processes or Tasks to discard all previous data that was\n transmitted to a particular output channel. It may be called using one of the following commands: RESETRESULTS gRMS\n RESETRESULTS gPLOT\n RESETRESULTS gExcelOutput\n RESETRESULTS ...",t:"The Resetresults elementary task"},"144":{i:0.00825024390546724,u:"../Content/Topics/x6505.html",a:"Occasionally, it may be necessary to use the solution of one simulation in another. gPROMS provides a facility to Save the current values of all\n or some of the variables in a simulation and to Restore them in (the same) or another simulation through the use of  Saved Variable Sets. The syntax of ...",t:"The Save and Restore elementary tasks"},"145":{i:0.00819938391104307,u:"../Content/Topics/c6586.html",a:"A  Task  forms a re-usable part of the operating procedure; it is associated with one or more Models and can be\n used multiple times within a Schedule and by other Tasks. A Task entity is defined by three sections:  Task Parameter declarations , (optional)  Task Variable declarations  and a  ...",t:"Defining Tasks"},"146":{i:0.0114327862703174,u:"../Content/Topics/x6596.html",a:"The Variable section is used to declare local variables. They can only be used within the Task in which they are declared. Task Variables\n are the equivalent of local subroutine Variables and as such are calculated by the Task. They should not be confused with Model Variables and are\n NOT associated ...",t:"The Variable and Schedule sections of a Task"},"147":{i:0.0086638950381277,u:"../Content/Topics/x6626.html",a:"The  Digital PI control example , although useful for grouping a series of elementary tasks\n together, has a big disadvantage: it is extremely specific. First of all, it refers to a unique sensor/valve pair,\n    Sensor101 and Valve201 respectively. Moreover, the sampling interval (5 time units) and\n ...",t:"The Parameter section of a Task"},"148":{i:0.00174487739059874,u:"../Content/Topics/x6671.html",a:"A complex operation on one or more items of process equipment can usually be decomposed into lower-level, simpler operations. Each of the\n lower-level operations may in turn be decomposed in other, more primitive operations, the decomposition continuing until all operations can be\n described in ...",t:"Hierarchical Task Construction"},});