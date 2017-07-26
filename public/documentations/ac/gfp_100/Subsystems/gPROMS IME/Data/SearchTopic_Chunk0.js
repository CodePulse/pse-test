define({"0":{i:0.00291669011142284,u:"../Content/Topics/c251.html",a:"gPROMS FormulatedProducts is at the centre of:  all model development and maintenance activities; the archiving of models and results; the execution of all model-based activities. This guide gives a description of the features and functionality of gPROMS FormulatedProducts - including some of the ...",t:"Overview"},"1":{i:0.00327087089114371,u:"../Content/Topics/c306.html",a:"The project tree allows the user to navigate all the ( Library )  Projects  and\n   Cases  that have been respectively opened and created during a gPROMS FormulatedProducts session. They are distinguished by their colours:\n yellow (Projects); blue(Library projects); and turquoise (Cases) and their ...",t:"Projects and the project tree"},"2":{i:0.00384346701463929,u:"../Content/Topics/x319.html",a:"To create a new gPROMS project select New from the Project menu. This will bring up a tree\n in the left-hand pane containing a number of folders: Variable Types Stream Types Connection Types Models Tasks Processes Experiments ... performed ... to be designed Experiment Designs Parameter Estimations ...",t:"Projects"},"3":{i:0.00663558829849202,u:"../Content/Topics/x372.html",a:"Each Project records information relating to the user(s) who created and last modified it, as well as the dates and times of creation and last\n modification. This information is read-only and is recorded and maintained automatically by gPROMS FormulatedProducts under the Project\u0027s Properties. ...",t:"Project properties"},"4":{i:0.0337964462206296,u:"../Content/Topics/x386.html",a:"In gPROMS FormulatedProducts, the Entities in one Project may make references to Entities that belong to another Project. For example, a Model Entity in Project A may refer to Variable Types in a Project B in declaring its Variables; a Model Entity in Project A may refer to Models in a Project B in ...",t:"Cross-referencing and hierarchical libraries"},"5":{i:0.00291669011142284,u:"../Content/Topics/x397.html",a:"A Project may refer to Entities residing in any number of other Projects. As shown in the figure the latter can be specified explicitly via the\n      Cross-references tab of the  Project\u0027s Properties  dialog. Note that only Projects\n that are currently open within the gPROMS FormulatedProducts ...",t:"Specifying a Project\u0027s list of cross-referenced Projects"},"6":{i:0.0041563228404459,u:"../Content/Topics/x415.html",a:"In technical terms, gPROMS FormulatedProducts supports multiple libraries organised in hierarchies of arbitrary depth which are searched in a depth-first\n manner. This sophisticated capability is best explained via an example. Suppose a Model Entity M1 in a certain Project A contains a Unit ...",t:"Search rules for cross-referenced Projects"},"7":{i:0.00291669011142284,u:"../Content/Topics/x421.html",a:"At any point during a gPROMS FormulatedProducts session, the user may instruct gPROMS FormulatedProducts not to search other Projects for any missing Entities until\n further notice. This can be done by checking the Disable cross-references check-box in the cross-references tab of the\n       ...",t:"Temporary suspension of Project cross-referencing"},"8":{i:0.00291669011142284,u:"../Content/Topics/x426.html",a:"It is sometimes desirable to create a completely self-contained Project that contains physical copies of all necessary Entities, including any\n that may reside in cross-referenced Projects. The creation of a self-contained Project may be performed automatically using the Copy X-referenced Entities ...",t:"Creating a self-contained Project"},"9":{i:0.00291669011142284,u:"../Content/Topics/Workspaces.htm",a:"Workspaces allow users to save and restore complete work environments consisting of libraries, projects and result cases. Examples for such work environments are  the currently open set of projects or  a list of the libraries and projects belonging to a specific work project that is being ...",t:"Workspaces"},"10":{i:0.00291669011142284,u:"../Content/Topics/Workspaces and ghost projects.htm",a:"The files belonging to a workspace can be manipulated outside of gPROMS FormulatedProducts, for instance by renaming, moving or deleting them. In this case, gPROMS FormulatedProducts cannot track the change and update the workspace accordingly. When gPROMS FormulatedProducts switches to such a ...",t:"Workspaces and ghost projects"},"11":{i:0.00291669011142284,u:"../Content/Topics/x449.html",a:"In order to protect against inadvertent modifications being made to a particular Project or Library project, it is recommended that the\n corresponding gPJ file be declared as read-only using standard operating system facilities prior to loading the project into\n gPROMS FormulatedProducts. In such ...",t:"Read-only Projects"},"12":{i:0.0193807893227428,u:"../Content/Topics/Diagnostic status summary.htm",a:"gPROMS Entities may not be implemented correctly and carry either a warning or an error status. This status is not only displayed for each Entity on its editor tabs, see for instance the  syntax checking of Model Entities , but also as a decoration of branches and leaves in the Project Tree. Both ...",t:"Diagnostic status summary in the Project Tree"},"13":{i:0.00291669011142284,u:"../Content/Topics/x461.html",a:"The Properties dialog can also be used to control the appearance of the Project in gPROMS FormulatedProducts\u0027s navigation tree. In particular, the display of\n empty folder groups (e.g. the TASK group in a Project that does not actually contain any TASK Entities) can be enabled or disabled by ticking ...",t:"Display of empty groups in Project tree"},"14":{i:0.00384346701463929,u:"../Content/Topics/x472.html",a:"Project libraries are projects marked by the user as such to indicate that they contain potentially re-usable components. Project libraries are\n marked in blue and always appear at the top of the Project tree. Their purpose is to enhance the management, usability and operability of generic\n Models ...",t:"Library projects"},"15":{i:0.00291669011142284,u:"../Content/Topics/x501.html",a:"The Model palette graphically displays the Model Entities contained in open Projects (and Library projects) and provides an alternative view to\n the Project tree. All Models that have an icon defined are shown on the Model palette 1 Models will only appear on the palette if the Show in palette ...",t:"Model palette"},"16":{i:0.00291669011142284,u:"../Content/Topics/x514.html",a:"To display the Model palette: click on View in the gPROMS FormulatedProducts top bar menu select Palette in the scroll-down menu (a check next to the option marks if it is on or off) The model palette window will appear on the left hand side. If the Project tree is also open, a tab at the bottom of ...",t:"Displaying the Model palette"},"17":{i:0.00327087089114371,u:"../Content/Topics/c534.html",a:"gPROMS Entities Each entry on the project tree represents a group of gPROMS Entities. Each entity type represents a fundamental gPROMS\n concept. gPROMS FormulatedProducts provides a customised entity editor for working with each entity type.  Entities in project tree",t:"gPROMS Entities"},"18":{i:0.00291669011142284,u:"../Content/Topics/x546.html",a:"To create a new entity 1 Alternatively, select the desired project, then select New entity from the Entity\n        menu. : place the pointer on the desired folder click the right mouse button select New entity from the shortcut menu give a name to the new entity select the type of entity in the ...",t:"Entity creation and deletion"},"19":{i:0.00650319758860553,u:"../Content/Topics/x609.html",a:"All entities in gPROMS (Models, Tasks, Parameters, Variables etc.) are subject to the same restrictions on the names they can be\n given. Names may only contain letters, numbers and the underscore character \"_\" All names must begin with a letter Upper and lower case letters may be used but all names ...",t:"Allowable entity names"},"20":{i:0.00291669011142284,u:"../Content/Topics/x619.html",a:"To open an entity editor 1 Alternatively, double clicking on an entity will open its editor. : place the pointer on the desired entity click on the right mouse button select Open on the shortcut menu gPROMS FormulatedProducts supports both multiple and single editor modes which can be selected from ...",t:"Opening and closing an entity editor"},"21":{i:0.00539595556946896,u:"../Content/Topics/x637.html",a:"gPROMS FormulatedProducts provides customised editors for each type of entity. Each editor provides a number of tabs, allowing the user to view or alter\n the different aspects of the entity\u0027s behaviour. This section will cover the two tabs which are present on most of gPROMS FormulatedProducts\u0027s ...",t:"Entity editors"},"22":{i:0.00861609358231978,u:"../Content/Topics/x645.html",a:"All Entity editors in gPROMS FormulatedProducts have an Entity Properties tab that includes the following\n information: description of the Entity; this is an arbitrary text provided by the Entity developer(s) for future reference. Entity creation and last modification information, including the user ...",t:"The entity properties tab"},"23":{i:0.00766573553069657,u:"../Content/Topics/x665.html",a:"Almost all Entity editors in gPROMS FormulatedProducts have a tab that displays and allows the editing of the representation of the Entity in\n the gPROMS language. For an introduction to the gPROMS language - refer to the ModelDeveloper Guide.  The gPROMS language tab in an Entity Editor",t:"The gPROMS language tab"},"24":{i:0.00291669011142284,u:"../Content/Topics/x675.html",a:"gPROMS FormulatedProducts automatically employs syntax-sensitive highlighting of the gPROMS language to support the creation and modification\n of each Entity. A default set of colours is assigned for different types of gPROMS constructs. The user can overwrite these default settings, or indeed\n ...",t:"Syntax highlighting"},"25":{i:0.0193807893227428,u:"../Content/Topics/x681.html",a:"gPROMS FormulatedProducts will automatically check the syntax in any of the Entities that have been written. In addition, a wide range of\n semantic checks are performed, e.g. flagging the use of unidentified local variables. 1 The semantic checking performed is currently local within the current ...",t:"Syntax checking"},"26":{i:0.00888761400149149,u:"../Content/Topics/x708.html",a:"Most gPROMS entity editors support assisted pathname completion. The pathname completion applies to all Units, Ports, Variables,\n Parameters, Selector names and values, Variable Types and Distribution Domains declared in a specific Model or Process and all its sub-models,\n as well as ...",t:"Assisted pathname completion"},"27":{i:0.00291669011142284,u:"../Content/Topics/x729.html",a:"This is similar to automatic pathname completion in that it completes the current word being typed. However, it applies to any word that\n may have previously been typed (not just Units, Ports, Variables, Parameters, Selector names and values and Distribution Domains). Word match is invoked manually ...",t:"Word Match"},"28":{i:0.00291669011142284,u:"../Content/Topics/x741.html",a:"The declaration of Units, Variables, Parameters, Selector names and values, Variable Types and Distribution Domains declared in a\n specific Model and all its sub-models, as well as in cross-referenced entities, can quickly be accessed by right-clicking on an element in an\n Entity editor. In the ...",t:"Locating declarations"},"29":{i:0.00327087089114371,u:"../Content/Topics/c755.html",a:"gPROMS FormulatedProducts allows users to build composite Models graphically. This functionality is designed to enable one quickly to construct process\n flowsheets that are suitable for use in any Model based activity (e.g. steady-state and dynamic simulation, parameter estimation and optimisation ...",t:"Constructing flowsheet Models"},"30":{i:0.00539595556946896,u:"../Content/Topics/x770.html",a:"A component Model is primarily a set of equations 1 please refer to the Model Developer Guide for more coverage of\n Model equations in the gPROMS language  (viewable in the  gPROMS language  tab) that describe the physical and chemical behaviour of the\n unit which it is representing. Typically the ...",t:"Component (library) Models"},"31":{i:0.0053723744210622,u:"../Content/Topics/x797.html",a:"Composite Models can be constructed by dragging (with the mouse) component Models from the Project tree, or Model palette, and dropping them onto\n a graphical topology editor. The connectivity of the composite Model can also be specified by connecting the Ports of the component Models. The figure ...",t:"Constructing the flowsheet"},"32":{i:0.00291669011142284,u:"../Content/Topics/x808.html",a:"To add a Model instance (a Unit) to the topology editor: select the Model in the Project tree or from Model palette, drag it to the desired position on the Topology editor and drop it by releasing the mouse button If the name of the Model is MyModel, the new Unit is automatically named MyModel001. ...",t:"Instances of component Models (Units)"},"33":{i:0.025984213771004,u:"../Content/Topics/x821.html",a:"Once positioned on the topology tab, changes can be made to a Unit using its shortcut menu. To display the shortcut menu, left-click on the\n Unit to select it and then right-click anywhere in the topology editor to activate the menu. The menu will apply only to the currently selected\n unit, ...",t:"The Unit shortcut menu"},"34":{i:0.00291669011142284,u:"../Content/Topics/x876.html",a:"Once more than one Unit has been added to a composite Model, the connectivity of the system can be defined by connecting the Ports of each\n Unit. This can be done in the following manner: select the   button on the Topology editor tool\n menu: this will switch the pointer to connection mode select ...",t:"Defining the connectivity of a composite Model"},"35":{i:0.00291669011142284,u:"../Content/Topics/x929.html",a:"gPROMS supports Arrays of Ports. This functionality allows multiple streams to be connected to a single Port (see figure). An Array Port is\n indicated by a hollow Port icon. When connecting to (or from) an Array Port a Connection details dialog box prompts the user to confirm to which Port\n index ...",t:"Arrays of Ports"},"36":{i:0.00291669011142284,u:"../Content/Topics/x943.html",a:"The Topology editor provides additional information via a pop-up message approach. The following information is available: Connection information: placing the mouse pointer over a connection displays the corresponding gPROMS language for\n the connection equation. Port information: placing the mouse ...",t:"Additional information display"},"37":{i:0.00291669011142284,u:"../Content/Topics/x960.html",a:"Each Unit on the Topology corresponds to a declaration of a Model instance. The Unit declarations are shown (and can be edited) on the gPROMS\n language tab in the UNIT section. Each connection on the Topology corresponds to an equation that equates the two Ports 1 More explicitly, gPROMS expands the ...",t:"Topology connections and the gPROMS language"},"38":{i:0.00843854357458298,u:"../Content/Topics/x966.html",a:"The appearance of connections on the Flowsheet can be customised using the Connection shortcut menu. As with the  Unit short cut menu , the connection shortcut menu can be activated by left clicking on a connection to select it\n and then right clicking anywhere within the Flowsheets window.  ...",t:"The connection shortcut menu"},"39":{i:0.00291669011142284,u:"../Content/Topics/x1052.html",a:"Most of the Models in the gPROMS Process Model Library (PML) are component Models,\n i.e. non-composite Models. However, in gPROMS there is no limitation with respect to the number of levels in the hierarchical Model decomposition:\n composite Models with a defined topology can themselves be used to ...",t:"Hierarchical Model construction"},"40":{i:0.00291669011142284,u:"../Content/Topics/x1065.html",a:"The Topology editor also supports Arrays of Units. Making a Unit into an array is easily done from the  Unit\n shortcut menu : select Make Unit into an array in the popup menu, fill in the size of the array in the different dimensions separated by commas, and click OK. Arrays of Units are ...",t:"Making a Unit into an Array"},"41":{i:0.00291669011142284,u:"../Content/Topics/x1110.html",a:"Once a number of Arrays of Units are present in the Flowsheet, these will need to be connected to other Units or other Arrays of Units. It is\n also possible to connect an element of an Array to another element in the same Array. It is easiest to describe the process of connecting Arrays of Units ...",t:"Connecting Array of Units"},"42":{i:0.00291669011142284,u:"../Content/Topics/x1224.html",a:"The procedure for connecting elements in the same Array is identical to the one outlined previously for connecting different Arrays. Simply\n use the Connection tool to connect the outlet port of the Array to the inlet port of the same Array and then use the  Connection\n details dialog to specify how ...",t:"Connecting Elements in the Same Array"},"43":{i:0.0223169301685542,u:"../Content/Topics/x1232.html",a:"The Topology editor provides many tools that enable the user to manipulate the look of the system Model. These tools can be accessed from the\n Topology editor tool bar that is shown in the figure below.  The Topology editor toolbar Display of Unit and Model names or the grid Dropdown for displaying ...",t:"The Topology editor tool bar"},"44":{i:0.00843854357458298,u:"../Content/Topics/x1331.html",a:"All of the tools for editing Topologies described so far have been concerned with modifying single Units. It is also possible to form groups of\n Units and apply many of the tools to the group as a whole. First, a group must be defined by holding down the SHIFT or CTRL key and left clicking on all of ...",t:"Groups of Units"},"45":{i:0.00996745098100589,u:"../Content/Topics/x1375.html",a:"Specifications are made using Model specification dialogs that appear when double clicking a component Model icon on the\n    Topology tab of a composite Model. Giving specifications using these dialogs corresponds to Setting and Assigning values to the gPROMS\n Parameters, Variables and Selectors ...",t:"Making Model specifications"},"46":{i:0.00291669011142284,u:"../Content/Topics/Flowsheeting diagnostics.htm",a:"The Flowsheet Diagnostics Panel provides instantaneous feedback regarding modelling issues before the execution of a gPROMS Activity and it appears below a flowsheet if there are any warnings or errors. Flowsheet Diagnostics Panel The diagnostics panel by default displays errors and warnings related ...",t:"Flowsheeting diagnostics"},"47":{i:0.0314084550722166,u:"../Content/Topics/x1420.html",a:"For complex flowsheets with many model instances, it may be desirable to maintain and print flowsheets at various levels of detail. For instance,\n one might like to have 3 flowsheets that show: only the main processing operations the main processing operations plus ancillary processing units all ...",t:"Flowsheet layers"},"48":{i:0.0191435582023947,u:"../Content/Topics/x1451.html",a:"To add, rename or delete a layer, click on the Layers control in the  Topology editor tool bar .\n This will activate a dialog, which shows the existing layers and their properties. For new projects, only one layer is defined:  The Flowsheet Layers Dialog To add a new layer, simply left-click on the ...",t:"Adding, renaming or deleting a layer"},"49":{i:0.0172403444268759,u:"../Content/Topics/x1474.html",a:"To assign an entity to a layer, select the entity by left clicking on it and then right click anywhere on the Flowsheet to bring up the  Unit shortcut menu . Now hold the mouse pointer over the Set layer to... menu item. This\n will pop up a list of available layers, with a tick next to the layer ...",t:"Assigning a Model entity to a layer"},"50":{i:0.0172403444268759,u:"../Content/Topics/x1487.html",a:"Once all of the entities in a Flowsheet have been assigned to different layers, you can specify what parts of the Flowsheet are displayed or\n printed by setting the attributes of each layer. To do this, bring up the Layers dialog by left clicking on the Layers control in the  Topology editor tool ...",t:"Specifying layer attributes"},"51":{i:0.00291669011142284,u:"../Content/Topics/x1500.html",a:"In addition to the Model entities and their connections, a number of other annotations may be added to the flowsheet, some of which are updated\n dynamically as gPROMS performs a simulation. These are: Text  - a static text label Images  - a static image Values  - a dynamic value or table of values ...",t:"Adding graphs and other annotations to the flowsheet"},"52":{i:0.0127263555672026,u:"../Content/Topics/x1528.html",a:"Having added value or plot annotations to a Flowsheet, and specified which variables they are to display (see  value annotations ), these values will be displayed automatically during a gPROMS simulation or can be\n played back after the simulation has been completed. To see the results, open a Case ...",t:"Viewing results on the Flowsheet during and after simulation"},"53":{i:0.00332990102109719,u:"../Content/Topics/x1585.html",a:"Once a text annotation has been added to the Flowsheet, it can be moved and resized in the same way as Model entities. Left click on the text\n annotation to select it and you will see 8 control points. You may then: Hold down the left mouse button anywhere within the control points and drag the ...",t:"Text annotations"},"54":{i:0.00332990102109719,u:"../Content/Topics/x1657.html",a:"When an image annotation is added to the Flowsheet, it can be moved and resized just as a text annotation. However, when the image file is\n selected, the annotation is automatically resized to the size of the image. Therefore, it is best to select the image file first. To do this, double\n click on ...",t:"Image annotations"},"55":{i:0.014048619858161,u:"../Content/Topics/x1681.html",a:"Tables of Variable values can be added to the Flowsheet in a similar way to text and image annotations. They will be updated dynamically as the\n simulation runs, or as a completed simulation (a Case Project) is replayed (see   Viewing results on\n the Flowsheet during and after simulation ). Three ...",t:"Value annotations"},"56":{i:0.00332990102109719,u:"../Content/Topics/x1799.html",a:"A dynamic graph of one or more Variables may be added to a Flowsheet by dragging a plot annotation from the annotations palette onto the\n Flowsheet. The annotation can be moved and resized exactly as with value annotations. After placing and sizing the plot annotation, double click on it to activate ...",t:"Plot annotations"},"57":{i:0.00327087089114371,u:"../Content/Topics/c1813.html",a:"Executing simulations In this section we consider running simulations. For details on running other model-based activities, such as optimisation and parameter\n estimation, and their particulars - please refer to the appropriate guide.",t:"Executing simulations"},"58":{i:0.00291669011142284,u:"../Content/Topics/x1816.html",a:"Select the Process 1 Alternatively a model may be selected to run the simulation - this will execute a process with the same name; if none exists, it will be\n created.  to be executed on the project tree and any of the following procedures can be used to start the simulation: navigate to the ...",t:"To execute a simulation"},"59":{i:0.00291669011142284,u:"../Content/Topics/x1839.html",a:"Before attempting to execute an Activity gPROMS checks that all Entities referenced from other Entities are either present in the current Project\n or from a  cross referenced Project . gPROMS will notify you if you have made a mistake and a referenced Entity\n cannot be located, for example, by ...",t:"Cross-reference check"},"60":{i:0.00384346701463929,u:"../Content/Topics/x1850.html",a:"A Case is a combined record of all the input information that defines a Model-based activity and the results generated by the execution of this\n activity, as well as any diagnostic messages that may have been issued during its execution. The intention is that a Case may serve as a permanent\n record ...",t:"Cases"},"61":{i:0.0477161790274496,u:"../Content/Topics/x1853.html",a:"A Case is created automatically by gPROMS FormulatedProducts at the start of the execution of any Model-based activity. An execution control dialog is\n presented to allow the user to configure various aspects of the Case including the following:  The execution control dialog Case configuration Case ...",t:"The Case configuration and execution control dialog"},"62":{i:0.0127763817497092,u:"../Content/Topics/x1948.html",a:"Once the user presses the OK button in the execution control dialog, gPROMS FormulatedProducts creates the Case. Just like a Project, a Case appears as a\n sub-tree of gPROMS FormulatedProducts\u0027s navigation tree. However, unlike most Projects, all entries in a Case are read-only, and this is ...",t:"Management of Cases"},"63":{i:0.00291669011142284,u:"../Content/Topics/x1976.html",a:"Cases are read-only records of executed Activities and therefore cannot be changed or used directly to perform Activities again. They can,\n however, be converted into Projects by performing a right-click on the Case and selecting Create gPROMS project from the\n pop-up menu. When this is selected, a ...",t:"Creating Projects from Cases"},"64":{i:0.0231974647046573,u:"../Content/Topics/x1982.html",a:"The execution of an activity is initiated by the user pressing the OK button on the execution control dialog. At this\n point the gPROMS FormulatedProducts creates the  Case . It also requests and obtains the license necessary for execution;\n this license is associated with the Case until it is ...",t:"Interacting with executing simulations"},"65":{i:0.00291669011142284,u:"../Content/Topics/x1995.html",a:"Once the necessary license is obtained, gPROMS FormulatedProducts creates an execution output window which displays all the messages relating to the\n solution of the Model-based activity. During this execution, the user can interact with the executing activity by right clicking on this window,\n ...",t:"Execution output"},"66":{i:0.00291669011142284,u:"../Content/Topics/x2039.html",a:"The diagnostics console provides an alternative window for interacting with the model - it can be added to the execution activity window with\n the diagnostic  toolbar button.  Diagnostics console Toolbar button It displays the same information as the execution output during the simulation and can be ...",t:"Diagnostics console"},"67":{i:0.00291669011142284,u:"../Content/Topics/x2101.html",a:"When performing any of the activities associated with a Model, gPROMS uses a number of optional Solution Parameters. These are mainly used to\n specify options for the numerical methods applied and how to output the results of the activity. Although these Solution Parameters can be specified in\n the ...",t:"Specifying Solution Parameters"},"68":{i:0.00374311193077155,u:"../Content/Topics/x2142.html",a:"To illustrate how to set Solution Parameters using the graphical interface, consider the cases of setting the output reporting interval and\n specifying a file for the Excel output channel. The ReportingInterval and gExcelOutput Solution Parameters come under the  Output\n generation section, so left ...",t:"Examples of Solution Parameter Specifications"},"69":{i:0.00692486297589187,u:"../Content/Topics/x2215.html",a:"In order for gPROMS to perform any activity, it must apply a particular type of solver. Each solver typically decomposes the problem into a\n number of simpler problems that each require a different type of solver. Consider the Solution Parameters for the Dynamic Optimisation activity as\n shown ...",t:"Global Specification and Inheritance of Solution Parameters"},"70":{i:0.00374311193077155,u:"../Content/Topics/x2300.html",a:"The Solution Parameters tab contains five controls in the bottom left-hand corner. These are for filtering out some of the Solution Parameters\n shown in the tree view and for resetting Solution Parameters to their default values. The three checkboxes allow you to: Show only activity solvers at the ...",t:"Filtering the Display of Solution Parameters and Resetting Default Values"},"71":{i:0.00785759311041245,u:"../Content/Topics/c2335.html",a:"There are many ways of viewing simulation results from gPROMS FormulatedProducts both as 2D or 3D plots: Basic results can be viewed from within the Cases themselves as explained in the section on  Inspecting results for an individual variable. gRMS  (general Results Management Service) offers more ...",t:"Viewing results"},"72":{i:0.00402989165326211,u:"../Content/Topics/x2356.html",a:"gPROMS FormulatedProducts stores the results of a simulation activity in the Case 1 If enabled from the Execution Control dialog .  Finding a single variable in the project tree To access the results for a particular Variable: Expand the Trajectories entity group in the desired Case Expand the Unit ...",t:"Inspecting results for an individual variable"},"73":{i:0.00291669011142284,u:"../Content/Topics/x2437.html",a:"The data for a single Variable can be exported as single Variable to a .csv file, which can be opened for example by\n Microsoft ExcelTM and Microsoft WordTM. To do this, right click on the results table for a Variable to activate the Results shortcut menu and select\n      Export table.... ...",t:"Exporting the results"},});