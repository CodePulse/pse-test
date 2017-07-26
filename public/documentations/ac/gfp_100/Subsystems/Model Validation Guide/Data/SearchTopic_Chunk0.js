define({"0":{i:0.0126766768356054,u:"../Content/Topics/c251.html",a:"gPROMS employs a rigorous optimisation-based approach for Model Validation by offering  Parameter Estimation  capabilities (i.e. fitting model parameters to experimental data) together with  Experiment Design capabilities (i.e. determining the best set of experiments to perform that will give the\n ...",t:"Introduction"},"1":{i:0.0105310715076179,u:"../Content/Topics/x264.html",a:"Experiments are used to improve the understanding of processes and create accurate models. The quality of information generated by experiments\n depends strongly on the experimental conditions as well as what is measured and when it is measured. In gPROMS we can consider: The processing of data from ...",t:"Experiments in gPROMS"},"2":{i:0.00897964633871968,u:"../Content/Topics/x284.html",a:"In gPROMS an experimental recipe consists of the following information The experiment duration The initial conditions in the experimental equipment (such as the initial temperature and amount of material in the experimental\n equipment) The time variation of the controlled inputs to the system (such ...",t:"Experiment operating policy"},"3":{i:0.0313517073604537,u:"../Content/Topics/x304.html",a:"Measurements of key quantities (corresponding to Model Variables) are taken throughout the duration of an experiment, each measurement consists\n of three pieces of information: The value of the measured quantity The time the measurement was taken The uncertainty to which the measurement is known - ...",t:"Measurements, Sensors and Variance models"},"4":{i:0.0233354232167003,u:"../Content/Topics/x412.html",a:"Both Parameter Estimation and Experiment Design problems in gPROMS require a working gPROMS process model that runs robustly for steady-state\n and/or dynamic simulation. Particular focus should be given to the following parts of the Process Entity: The Assign specifications mark certain system ...",t:"gPROMS Model requirements"},"5":{i:0.0780877137694077,u:"../Content/Topics/x463.html",a:"In the section on  model requirements  it has been explained that model variables need to be of a\n         specific type depending on the role that they play in model validation. Controls, for instance, have to be Assigned variables. Identifying the type requires the inspection of the corresponding ...",t:"Choosing variables"},"6":{i:0.0233354232167003,u:"../Content/Topics/x549.html",a:"Direct editing of variable paths is also possible. Instead of using the\n                 graphical choice, the full gPROMS path of the desired variable has to be entered in the corresponding table cell or edit field, see the Initial\n                 Condition editor below. If you do not wish to type ...",t:"Direct editing of variable paths"},"7":{i:0.0421314774400634,u:"../Content/Topics/c570.html",a:"gPROMS can be used to perform Parameter Estimation for complex models using both dynamic and steady-state experimental data.\n This chapter covers the following issues: a description of what a  Parameter Estimation problem  is, the  Performed Experiment  and  Parameter Estimation  entities\n that are ...",t:"Parameter Estimation in gPROMS"},"8":{i:0.0222031108942689,u:"../Content/Topics/x594.html",a:"A detailed gPROMS process model is constructed from equations describing the physical and chemical phenomena that take place in the system. These\n equations usually involve parameters that can be adjusted to make the model predictions match observed reality. Examples of model parameters include\n ...",t:"What is Parameter Estimation?"},"9":{i:0.0222898695963495,u:"../Content/Topics/x729.html",a:"A Parameter Estimation problem makes use of data gathered from a set of experiments. Each  experiment  is\n characterised by a set of conditions under which it is performed, namely: The overall duration The initial conditions, v The variation of the control variables, u(t) The values of the ...",t:"Performed Experiments"},"10":{i:0.0105310715076179,u:"../Content/Topics/x796.html",a:"In order to specify the Process entity to use for the Parameter Estimation, click on the General tab in the Experiments\n Performed entity editor and then choose the desired Process from the drop down menu at the top of the window (see figure below) - you can select a\n Process Entity from the same ...",t:"General information"},"11":{i:0.0105310715076179,u:"../Content/Topics/x848.html",a:"An experiment control is a variable that is adjusted during an experiment (such as a heating policy in a reactor). Experiment controls\n therefore form part of the \"recipe\" for running the experiment. The user can specify the variation in a Variable value using one of three different\n mechanisms: ...",t:"Controls"},"12":{i:0.0105310715076179,u:"../Content/Topics/x895.html",a:"During an experiment, measurements of key variables are taken using sensors. The measured data for an experimental run should be entered in the\n table found on the Measured data tab of the Experiments Performed entity (shown below).  Tabulation of the measured data for an experimental run. The  ...",t:"Measured Data"},"13":{i:0.00674179214408527,u:"../Content/Topics/x979.html",a:"As mentioned previously, assigning a Sensor name to a measured variable is optional. If you are putting together your first experiments, you\n may wish to simply leave these \u003cunspecified\u003e. In this case, the measured variables will appear \"by name\" in the Parameter Estimation and/or\n Experiment Design ...",t:"When to assign a Sensor name"},"14":{i:0.00674179214408527,u:"../Content/Topics/x997.html",a:"One approach is to leave the variance model \u003cunspecified\u003e, which allows all the variance model information to be given in a central\n location. It reduces the duplication of the variance model information. For example, you may intend to use the same variance specifications across\n a large number of ...",t:"When to set a Variance model"},"15":{i:0.0105310715076179,u:"../Content/Topics/x1009.html",a:"To help with debugging and diagnosis it is also possible to simulate the control strategy defined in a single experiment. To do this: Ensure a  Process has been specified on the General tab of the Performed Experiment. Select the  Experiment entity in the Project Tree. From the Activities menu, ...",t:"Simulating a Performed Experiment"},"16":{i:0.00674179214408527,u:"../Content/Topics/x1032.html",a:"To simulate an experiment, gPROMS creates a copy of the existing Process and then automatically modifies the text to match the conditions\n specified in the Performed Experiment. This approach has a number of advantages. Firstly, the structure of the Process remains intact, including any comments. ...",t:"The Process generated to Simulate a Performed Experiment"},"17":{i:0.0166332025536832,u:"../Content/Topics/x1069.html",a:"The complete specification of a Parameter Estimation problem requires some additional information which is not provided in the gPROMS Process or\n Experiments Performed entities. This includes information on the unknown parameters to be estimated, the number of experiments that were performed, and\n ...",t:"The Parameter Estimation entity"},"18":{i:0.0304045352739254,u:"../Content/Topics/x1111.html",a:"The parameters to be estimated are a subset of the ASSIGNed variables in the Process entity, that will change the model predictions if they are\n adjusted. One could manually try and change them and run repeated simulations until the model predictions match the experiment data, or you can use\n the ...",t:"Parameters to be estimated"},"19":{i:0.0138109042013104,u:"../Content/Topics/x1154.html",a:"To define the experiments that will be used in the Parameter Estimation problem, click on the Experiments and\n         measurements tab and then click the Add button at the top right of the window. gPROMS will then open a new window\n         that includes a project tree with all the experiment ...",t:"Experiments and measurements"},"20":{i:0.0190188307069238,u:"../Content/Topics/x1186.html",a:"When gPROMS solves a Parameter Estimation problem, the total number of parameters to be estimated is the sum of the unknown physical\n parameters together with the unknown variance model parameters. It is possible to reduce this number by grouping variance parameters together. For\n example, two ...",t:"Grouping sensors"},"21":{i:0.0118577624451934,u:"../Content/Topics/x1218.html",a:"For a fully defined Parameter Estimation problem the following entities are required: one or more Model entities; a Process entity; an Estimation entity one or more Performed Experiments entities Note that the Experiment entities must all refer to the same Process.",t:"Execution of a Parameter Estimation activity"},"22":{i:0.016716925271573,u:"../Content/Topics/x1235.html",a:"You can execute a Parameter Estimation activity in a number of ways. First, select the Estimation entity from the project tree, and then\n either; drop down the Activities menu and select Estimate... , or click  in the tool bar, or press F5. If there are any syntactical or cross-referencing mistakes ...",t:"Running the Parameter Estimation activity"},"23":{i:0.00674179214408527,u:"../Content/Topics/x1277.html",a:"You can monitor the progress that is being made during any Parameter Estimation activity from the Execution Output window. From the Execution\n Output window you can expand or collapse portions of the output by clicking on the  + or  - signs in the tree\n associated with the executing activity.  ...",t:"Monitoring the activity progress"},"24":{i:0.027505867443754,u:"../Content/Topics/x1290.html",a:"It is possible to fine tune the numerical parameters associated with the underlying solvers used by gPROMS in the solution of a Parameter\n Estimation problem. This is done in the SOLUTIONPARAMETERS section of the Process entity. There is currently only one standard\n mathematical solver for Parameter ...",t:"Tuning the Parameter Estimation execution"},"25":{i:0.0118577624451934,u:"../Content/Topics/x1593.html",a:"You can analyse the results of a Parameter Estimation problem in a number of ways: Variable values , stored in the  Trajectories folder of the Case, allow you to\n view the model predictions of the measured variables - and optionally other variables - while the activity is running. Information on the ...",t:"Analysing the Parameter Estimation results"},"26":{i:0.0234707580291662,u:"../Content/Topics/x1621.html",a:"In the Execution Case results Trajectories are stored for all of the control and measured variables in each of the experiments. Note that from\n the  execution dialog  you have the option to choose whether to store only the results from the final solution or\n whether to record them for all of the ...",t:"Variable Trajectories"},"27":{i:0.0359508782292581,u:"../Content/Topics/x1657.html",a:"Found in the Results folder, the Parameter Estimation report file has the same name as the estimation activity that was executed. To view the\n report simply open it by double-clicking. The figure below shows an example of a comprehensive report.  Parameter Estimation comprehensive report. The report ...",t:"The Comprehensive report for Parameter Estimation"},"28":{i:0.0196637450071709,u:"../Content/Topics/x1715.html",a:"A typical part of the workflow associated with parameter estimation activities involves taking the optimal parameter\n estimates that are generated by the calculation and using them to update the values of the parameters specified in the model specification dialog(s).\n This transfer can be done ...",t:"Updating specifications and initial guesses with estimation results"},"29":{i:0.0107536851965453,u:"../Content/Topics/x1741.html",a:"The  text report (.out)  file contains a summary report on the Parameter Estimation activity (giving\n the same information as the Comprehensive report), including: the outcome of the estimation run the final value of the objective function the final values of the estimated model parameters the final ...",t:"The summary report file"},"30":{i:0.0158824292397361,u:"../Content/Topics/x1755.html",a:"------------------------------------------------\ngPROMS Parameter Estimation\n------------------------------------------------\n\n\nEstimation Name                   :  Batch\nFinal Optimisation Status         :  Optimal Solution Found\nObjective function                :  360303\n    Constant term         ...",t:"Example Parameter Estimation text output file"},"31":{i:0.0107536851965453,u:"../Content/Topics/x1758.html",a:"gPROMS provides an advanced statistical analysis tool in Microsoft ExcelTM that allows the user to\n further analyse the results and create several statistical plots. The data that are necessary for the operation of this facility are stored in the\n      .stat-mr file. It contains all the information ...",t:"Statistical analysis in Excel"},"32":{i:0.0488690388254435,u:"../Content/Topics/x1777.html",a:"A number of spreadsheets are created automatically when the statistics data file is loaded in Excel. Summary This sheet summarises the contributions to the objective function of the constant, variance and\n residual terms, as well as the types of variance models used for each measured variable in ...",t:"Data spreadsheets"},"33":{i:0.0528509057857171,u:"../Content/Topics/x2008.html",a:"In addition to the spreadsheets, the user can also create three types of statistical plots by choosing the Plot option from the\n        Parameter Estimation menu on the MS Excel tool bar. Each of these is described below: Overlay plot This overlays the measured and predicted values for whichever ...",t:"Graphical analysis"},"34":{i:0.0118577624451934,u:"../Content/Topics/x2098.html",a:"The gPROMS installation includes a simple Parameter Estimation example - it is highly recommended for further investigation. It can be accessed by clicking on the browse examples button on the gPROMS Tool bar and then navigating to General capabilities\\Model\n\t\t\tValidation\\ReactorEst.gPJ. This ...",t:"A Parameter Estimation example"},"35":{i:0.0143672383142397,u:"../Content/Topics/c2640.html",a:"gPROMS can be used to perform Experiment Design for parameter precision for complex steady-state and dynamic models. This\n chapter covers the following issues: a description of what an  Experiment Design  problem is, the  Experiments to be designed  and  Experiment Design  entities that are\n used to ...",t:"Experiment Design in gPROMS"},"36":{i:0.00877715074154391,u:"../Content/Topics/x2663.html",a:"Experiments are used to improve the understanding of processes and create accurate models. The quality of information generated by experiments\n depends strongly on the experimental conditions as well as what is measured and when it is measured. The aim is to design experiments in order to\n maximise ...",t:"What is Experiment Design?"},"37":{i:0.0221312286290667,u:"../Content/Topics/x2668.html",a:"In mathematical terms, we want to minimise some measure   of the variance-covariance matrix,  , of the parameters to be estimated: The experiment decision variables   may be subject to equality or inequality constraints: The variance-covariance matrix is of the form: The information matrix  is a   ...",t:"Underlying mathematics of Experiment Design"},"38":{i:0.00877715074154391,u:"../Content/Topics/x2924.html",a:"The  Experiments to be designed entity is used to specify the full details of the experiments to be designed. Note experiments that have already been performed and which you want to take into account when designing an experiment are specified in exactly\n the same way as for  Parameter Estimation . ...",t:"Experiments to be designed"},"39":{i:0.00823390900648408,u:"../Content/Topics/x2974.html",a:"In order to define the Process entity to use for a given experiment, click on the General tab in the\n       Experiments to be designed entity editor and then choose the desired Process from the drop down menu at the top of the window as\n shown in the figure below.  Specifying the Process entity that ...",t:"General information"},"40":{i:0.00823390900648408,u:"../Content/Topics/x3015.html",a:"An experiment control is a variable that can be adjusted during an experiment (such as a heating policy in a reactor). Experiment controls\n therefore form part of the \"recipe\" for running the experiment. The user can specify the variation in a Variable value using one of three different\n mechanisms: ...",t:"Controls"},"41":{i:0.00823390900648408,u:"../Content/Topics/x3078.html",a:"The purpose of the Constraints tab is to allow the user to impose safety and operational limits on the designed experiment to ensure. This\n ensures that the result of the Experiment Design problem is an experiment that is allowable and feasible to run in practice. To capture these limits,\n gPROMS ...",t:"Constraints"},"42":{i:0.00823390900648408,u:"../Content/Topics/x3136.html",a:"During an experiment, measurements of key variables are taken using sensors. The purpose of the  Measurement and Sensors\n      tab is to define the variables that will be measured and to specify how often or when the measurements can be taken.  The measurements and sensors tab Each measured variable ...",t:"Measurements and sensors"},"43":{i:0.0135525908500337,u:"../Content/Topics/x3193.html",a:"This comprises information on the  design criterion , the unknown parameters to be estimated and the\n measurements and sensors (together with their statistical variance models) used in one or more of the experiments. In order to create a new Experiment Design entity, do the following: Pull-down the ...",t:"The Experiment Design entity"},"44":{i:0.0271753244387668,u:"../Content/Topics/x3235.html",a:"In order to define the form of  objective function for the Experiment Design problem , click on the\n      General tab in the  Experiment Design entity editor and then choose the desired objective from the drop\n down menu at the top of the window as shown in the figure below.  Specifying the ...",t:"General information"},"45":{i:0.0105816933661518,u:"../Content/Topics/x3313.html",a:"On this tab you select the experiments (both ....performed and ...to be designed) to be included in\n the Experiment Design problem. In addition, you have the opportunity to check that the variance models for all the sensors have been fully\n defined. To add experiments click on the Experiments and ...",t:"Experiments and measurements"},"46":{i:0.00877715074154391,u:"../Content/Topics/x3342.html",a:"For a fully defined Experiment Design problem the following entities are required: one or more Model entities; a Process entity; an Experiment Design entity one or more to be designed Experiment entities Note that the Experiment entites must all refer to the same Process. To execute an Experiment ...",t:"Execution of Experiment Design activities"},"47":{i:0.00823390900648408,u:"../Content/Topics/x3403.html",a:"In the Execution Case results Trajectories are stored for all of the control and measured variables in each of the experiments - these show the\n recommended behaviour for all the control variables and the anticipated behaviour (from the gPROMS model) of the measured variables. Note that from\n the ...",t:"Variable Trajectories"},"48":{i:0.00823390900648408,u:"../Content/Topics/x3424.html",a:"Found in the Results folder, the Experiment Design report file has the same name as the Experiment design activity that was executed. To view\n the report simply open it by double-clicking. The figure below shows an example of a comprehensive report.  Comprehensive Experiment Design report. The ...",t:"The Comprehensive report for Experiment Design"},"49":{i:0.00674179214408527,u:"../Content/Topics/x3479.html",a:"The .out and .stat plain text files contain a summary report of the Experiment Design run in a simple text format; but of\n course the information is the same as that presented in the Comprehensive Report file. The  text report (.out)  file provides the following information: the outcome of the ...",t:"The Experiment Design text report and statistics files"},"50":{i:0.00960705620917914,u:"../Content/Topics/x3512.html",a:"------------------------------------------------\ngPROMS Experiment Design for Parameter Precision\n------------------------------------------------\n\n\ngPROMS Process                    :  Batch\nFinal Optimisation Status         :  Optimal Solution Found\nDesign Criterion                  :  ...",t:"Example Experiment Design text report file"},"51":{i:0.00960705620917914,u:"../Content/Topics/x3516.html",a:"Parameters to Be Estimated: Nominal Values (fixed) Scaling factor\n-------------------------- ====================== ==============\nFlowsheet.Ferment.theta(1) 0.1 0.1\nFlowsheet.Ferment.theta(2) 0.1 0.1\nFlowsheet.Ferment.theta(3) 0.1 0.1\nFlowsheet.Ferment.theta(4) 0.1 0.1\nVariance ...",t:"Example Experiment Design text statistics file"},"52":{i:0.00674179214408527,u:"../Content/Topics/x3520.html",a:"For each experiment named EXPERIMENTNAME, a file EXPERIMENTNAME.SCHEDULE is created. This presents\n the most recent Experiment Design solution point in the form of a gPROMS Schedule The Schedule file can be used to reproduce the detailed results of the Experiment Design optimisation for each ...",t:"Experiment SCHEDULE files"},"53":{i:0.00674179214408527,u:"../Content/Topics/x3541.html",a:"#\n# Schedule generated from experiment design for parameter precision \n# for experiment FEDBATCH_DES\n#\n# Final Optimisation Status : Optimal Solution Found\n# Design Criterion : E-optimal\n# Value of Design Criterion : 0.0886671\n#\n\nINITIAL\n # NOTE: Only Initial Conditions specified in the experiment ...",t:"Example Experiment Schedule"},"54":{i:0.0139644371366718,u:"../Content/Topics/x3544.html",a:"After a successful Experiment Design activity; for each designed experiment an Experiment template is generated. This presents the results of\n the Experiment Design in a  Performed Experiment  entity: the calculated values for the controlled\n variables and the initial conditions are entered on the ...",t:"Designed Experiment templates"},"55":{i:0.0186947276099168,u:"../Content/Topics/x3557.html",a:"It is possible to fine tune the numerical parameters associated with the underlying solvers used by gPROMS in the solution of an Experiment\n Design problem. This is done in the SolutionParameters section of the Process entity. The specification for the default solver is shown below: ...",t:"Controlling the execution of Experiment Design activities"},"56":{i:0.00877715074154391,u:"../Content/Topics/x3622.html",a:"The gPROMS installation includes a simple Experiment Design example - it is highly recommended that you take a look at this. You can access this\n by clicking on the browse examples button on the gPROMS Tool bar and then navigating to General capabilities\\Model\n Validation\\DesignFedbatch.gPJ. This ...",t:"An Experiment Design example"},"57":{i:0.00674179214408527,u:"../Content/Topics/c3803.html",a:"In this example, the estimation of the kinetic parameters of a phenol hydro-deoxidation reaction is considered. Note:You should load the Process Model Libraries and the PML Batch Reactor Example project file \n (from the examples/PML Flowsheets directory of your gPROMS installation) The following ...",t:"A Model Validation Example"},"58":{i:0.00674179214408527,u:"../Content/Topics/x3842.html",a:"Reaction kinetics Phenol hydro-deoxidation over a sulphided CoMo/Al2O3 catalyst follows the following reaction network:  Reaction Network The kinetics of these reactions has been described as pseudo-first order in the liquid phase phenol concentration: Ri = K0,i exp {-Ea/RT}\n Ciliquid i = 1,...,NC",t:"Reaction kinetics"},"59":{i:0.00674179214408527,u:"../Content/Topics/x3860.html",a:"Reactor A 50 ml stainless steel autoclave is used for the experiments. The autoclave is equipped with a spinning catalyst basket to avoid heat and\n mass transfer limitations between the catalyst particles and the liquid with the reactants. Experiment procedure Enough quantity of pre-sulphide ...",t:"Experiment description"},"60":{i:0.00674179214408527,u:"../Content/Topics/x3972.html",a:"In order to perform the Parameter Estimation, you need to do the following: Load the Process Model Library and Batch reactor project. Inspect the Batch Estimation entity; obseve where the estimated parameters and sensor groups are identified. Inspect the EXP_1 and EXP_2 Performed Experiment ...",t:"Parameter Estimation"},"61":{i:0.00674179214408527,u:"../Content/Topics/x3989.html",a:"In order to increase the precision/certainty of the parameters to be estimated, another experiment is to be designed. To do so, do the\n following: Inspect the Batch Experiment Design Entity. Note that: The E-optimal design criterion is used to design the new experiment. The values determined from ...",t:"Experiment Design"},});