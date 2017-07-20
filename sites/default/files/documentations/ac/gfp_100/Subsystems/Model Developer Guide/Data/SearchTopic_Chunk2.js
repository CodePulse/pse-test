define({"149":{i:0.00174487739059874,u:"../Content/Topics/x6701.html",a:"Just as it is possible to construct a Schedule of a Process using a graphical interface, it is also possible to build new user-defined Tasks\n graphically. The following tabs provide a graphical interface for building (or modifying) user-defined Tasks and are entirely equivalent to typing\n in gPROMS ...",t:"Building Tasks using the graphical interface"},"150":{i:0.00211567215764054,u:"../Content/Topics/x6719.html",a:"After inserting a new Task in the Project (right click on Tasks in the Project tree, select New entity...,\n provide a name and click OK), left click on the Interface tab and the following will be shown.  New Task Interface tab The Interface tab contains a list of all of the Parameters in the Task. ...",t:"Using the Interface tab"},"151":{i:0.00391403529202664,u:"../Content/Topics/x6758.html",a:"The Variables tab contains a list of all of the local Variables in the Task. To add a new local Variable, click on the \u003cnew\u003e cell\n and enter a name for the new Variable. Then the type can be chosen from the list box, as shown below.  Adding a new local Variable The order of the local Variables can ...",t:"Using the Variables tab"},"152":{i:0.0054426867464689,u:"../Content/Topics/x6776.html",a:"Task Schedules are constructed in exactly the same way as Process Schedules (see  Defining\n Schedules ), with one additional feature: when the Schedule tab of a Task is open, the Task palette will contain one extra elementary Task\n for assigning the value of a local Variable (and this will also be ...",t:"Using the Schedule tab"},"153":{i:0.00540657312528024,u:"../Content/Topics/x6829.html",a:"When discussing the  Parameter  section within a Task, we considered an example where there were two\n digital PI controllers. The Task for each controller must be called in the Process section in order to activate the controller and specify its\n tuning parameters. This small example of just two ...",t:"Intrinsic Tasks"},"154":{i:0.00174487739059874,u:"../Content/Topics/x6848.html",a:"The final Schedule is reported by gPROMS in the execution output, so that you can check that the Intrinsic Tasks are behaving as intended.\n After the simulation has completed, scroll the Execution Output window up until you find the line \"The following SCHEDULE of PARALLEL Tasks is\n generated for ...",t:"Viewing the Schedule Generated by Intrinsic Tasks"},"155":{i:0.00174487739059874,u:"../Content/Topics/x6866.html",a:"So far, the examples on Intrinsic Tasks have assumed that these Tasks should always be enabled for every instance of\n a Model containing Intrinsic Tasks. Although this is the default behaviour, one can easily select which Model instances should have their\n Intrinsic Tasks enabled. There are a number ...",t:"Controlling the Use of Intrinsic Tasks"},"156":{i:0.00174487739059874,u:"../Content/Topics/c6927.html",a:"gPROMS can be used to perform stochastic simulations. The prime reason for considering stochastic simulation is to determine how the\n distributions of key output Variables are influenced by the distributions of the input Variables. In order to do so, you will learn how to do the\n following: Assign  ...",t:"Stochastic Simulation in gPROMS"},"157":{i:0.00248646692468234,u:"../Content/Topics/x6955.html",a:"Parameters and Variables can be given random values in the Set and Assign sections, respectively, of a Process Entity in the same way that\n they are given deterministic values. Instead of assigning a literal value or expression to the parameter or variable, special functions are used\n that return ...",t:"Assigning random numbers to Parameters and Variables"},"158":{i:0.00432438028824433,u:"../Content/Topics/x7030.html",a:"In order to examine how the distributions of key output Variables are influenced by the distributions of the input Variables, we will\n describe how you can  combine multiple simulations  in a single process and then use the results to evaluate\n metrics (such as the mean, variance, etc.) of the ...",t:"Plotting results of multiple stochastic simulations"},"159":{i:0.00174487739059874,u:"../Content/Topics/x7055.html",a:"In this section we illustrate the important techniques of stochastic simulation in gPROMS using a simple model of an isothermal batch\n reaction. The following reactions occur in the reactor, D being the desired product. The reactor initially contains 10m3 of an equimolar mixture of A and B. The ...",t:"Stochastic Simulation Example"},"160":{i:0.00174487739059874,u:"../Content/Topics/c7114.html",a:"The Process entity is used to describe a simulation activity that is to be carried out by gPROMS using instances of one or more Model entities. The\n execution of model-based activities involves the solution of different types of mathematical problems. Typically, these are complex problems due to ...",t:"Controlling the Execution of Model-based Activities"},"161":{i:0.00749679548393853,u:"../Content/Topics/x7141.html",a:"At the start of each simulation, gPROMS has to solve a problem known as initialisation. For both steady-state and dynamic\n simulations, gPROMS must first solve a system of algebraic equations (usually nonlinear). This naturally requires initial guesses for all of the\n variables in order to provide ...",t:"The PRESET section"},"162":{i:0.00430774606431663,u:"../Content/Topics/x7176.html",a:"The SOLUTIONPARAMETERS section allows the specification of parameters that affect: the results generated by the execution of a model-based activity; the mathematical solvers to be used for the execution of a model-based activity; the validation and diagnosis of the mathematical models; the use of ...",t:"The SOLUTIONPARAMETERS section"},"163":{i:0.00174487739059874,u:"../Content/Topics/x7202.html",a:"The following Solution Parameters allow the user to control the generation of results by the execution of a model-based activity, as well as\n the destination of these results. gExcelOutput: Enables or disables the Microsoft Excel output\n channel. By default, this parameter is switched off. When set ...",t:"Controlling result generation and destination"},"164":{i:0.00174487739059874,u:"../Content/Topics/x7273.html",a:"Controlling the behaviour of Foreign Objects The following Solution Parameters allow the user to control the behaviour of Foreign Objects associated with the execution of a model-based activity: FOStatisticsLevel: An integer in the range [0, 2]",t:"Controlling the behaviour of Foreign Objects"},"165":{i:0.00174487739059874,u:"../Content/Topics/x7309.html",a:"gPROMS supports four main types of model-based activity, namely: Simulation Optimisation - refer to the gPROMS Optimisation Guide. Parameter Estimation - refer to the gPROMS Model Validation Guide Experiment Design - refer to the gPROMS Model Validation Guide Each one of these activities can be ...",t:"Choosing mathematical solvers for model-based activities"},"166":{i:0.00174487739059874,u:"../Content/Topics/x7353.html",a:"Configuring mathematical formulation and validation Before executing a model-based activity, gPROMS can perform various checks and modifications to the mathematical formulation of the problem.\n         These are summarised below. IdentityElimination: ON (default) or OFF If set to ON, the solver will ...",t:"Configuring model validation and diagnosis"},"167":{i:0.00174487739059874,u:"../Content/Topics/x7378.html",a:"A mathematical solver for a model-based activity, such as dynamic simulation or optimisation, is usually a complex piece of software. Its\n precise behaviour and performance in solving any particular problem is controlled by a number of algorithmic parameters. For\n example, the quality of the results ...",t:"Configuring the mathematical solvers"},"168":{i:0.00174487739059874,u:"../Content/Topics/x7412.html",a:"Some of the algorithmic parameters used to configure solvers may be solvers themselves. For example, solving a set of differential and\n algebraic equations typically requires the solution of a number of mathematical sub-problems involving sets of either nonlinear or linear algebraic\n equations. ...",t:"Specifying solver-type algorithmic parameters"},"169":{i:0.00174487739059874,u:"../Content/Topics/x7426.html",a:"Most mathematical solvers for simulation, optimisation and parameter estimation need to make use of sub-solvers for the solution of sets of\n linear and nonlinear algebraic equations. In order to avoid having to specify and configure these low level solvers repeatedly within the same\n SOLUTION ...",t:"Specifying default linear and nonlinear equation solvers"},"170":{i:0.00204151320423218,u:"../Content/Topics/x7456.html",a:"There are two standard mathematical solvers for the solution of sets of linear algebraic equations in gPROMS, namely  MA28  and  MA48 . Both of these employ direct LU-factorisation algorithms, designed for large, sparse,\n asymmetric systems of linear equations.  MA48  is the newer of the two codes. ...",t:"Standard solvers for linear algebraic equations"},"171":{i:0.0031069335738923,u:"../Content/Topics/x7463.html",a:"The algorithmic parameters used by MA28 along with their default values are shown below. This is followed by a\n detailed description of each parameter. \"MA28\" [ \"OutputLevel\" := 0;\n \"PivotStabilityFactor\" := 0.1;\n \"ExpansionFactor\" := 4;\n \"MaxStructures\" := 6;\n \"MaxStructuresMemory\" := 100000 ] ; ...",t:"The MA28 solver"},"172":{i:0.00421729021210813,u:"../Content/Topics/x7509.html",a:"The algorithmic parameters used by MA48 along with their default values are shown below. This is followed by a detailed description of each\n parameter. \"MA48\" [ \"OutputLevel\" := 0;\n \"PivotStabilityFactor\" := 0.1;\n \"ExpansionFactor\" := 5;\n \"FullSwitchFactor\" := 0.5;\n \"PivotSearchDepth\" := 3;\n ...",t:"The MA48 solver"},"173":{i:0.00204151320423218,u:"../Content/Topics/x7560.html",a:"There are two standard mathematical solvers for the solution of sets of nonlinear algebraic equations in gPROMS, namely  BDNLSOL  and  SPARSE : BDNLSOL  stands for \u0027Block Decomposition NonLinear SOLver\u0027. It is a new implementation of a general solver for\n solving sets of nonlinear equations ...",t:"Standard solvers for nonlinear algebraic equations"},"174":{i:0.0026125405511699,u:"../Content/Topics/x7585.html",a:"The algorithmic parameters used by BDNLSOL along with their default values are shown below. This is followed by a detailed description of each\n parameter. \"BDNLSOL\" [\"BlockSolver\" := \"SPARSE\";\n \"LASolver\" := \"MA48\";\n \"OutputLevel\" := 0;\n \"MaxStructureSwitches\" := 100;\n \"UseIFSuperstructure\" := ...",t:"The BDNLSOL solver"},"175":{i:0.0280160971763834,u:"../Content/Topics/x7626.html",a:"The algorithmic parameters used by SPARSE along with their default values are shown below. This is followed by a detailed description of each\n parameter. \"SPARSE\" [\"LASolver\" := \"MA48\";\n \"BoundsTightening\" := 0;\n \"ConvergenceTolerance\" := 1E-5;\n \"EffectiveZero\" := 1E-5;\n \"FDPerturbation\" := 1E-5;\n ...",t:"The SPARSE solver"},"176":{i:0.00278310273831578,u:"../Content/Topics/x7792.html",a:"There are two standard mathematical solvers for the solution of mixed sets of differential and algebraic equations in gPROMS, namely DASOLV and\n SRADAU: DASOLV is based on variable time step/variable order Backward Differentiation Formulae (BDF). This has been proved to be efficient for a wide\n ...",t:"Standard solvers for differential-algebraic equations"},"177":{i:0.00174487739059874,u:"../Content/Topics/DAEBDF.html",a:"The algorithmic parameters used by DAEBDF along with their default values are shown below. This is followed by a detailed description of each\n parameter. \"DAEBDF\" [\n \"InitialisationNLSolver\" := \"BDNLSOL\",\n \"LASolver\" := \"MA48\",\n \"ReinitialisationNLSolver\" := \"BDNLSOL\" \n ...",t:"The DAEBDF  solver"},"178":{i:0.00248646692468234,u:"../Content/Topics/x7876.html",a:"The algorithmic parameters used by DASOLV along with their default values are shown below. This is followed by a detailed description of each\n parameter. \"DASOLV\" [\n \"InitialisationNLSolver\" := \"BDNLSOL\",\n \"LASolver\" := \"MA48\",\n \"ReinitialisationNLSolver\" := \"BDNLSOL\" \n ...",t:"The DASOLV solver"},"179":{i:0.00411057184417886,u:"../Content/Topics/x8228.html",a:"At the end of every time step, DASOLV examines the equation which has the largest residual in magnitude, and records an estimate of the error\n committed in each variable xi in this equation. To do this it uses the value of the Jacobian element\n with respect to that variable (i.e. the partial ...",t:"Large residual warnings"},"180":{i:0.00174487739059874,u:"../Content/Topics/x8253.html",a:"The algorithmic parameters used by SRADAU along with their default values are shown below. This is followed by a detailed description of each\n parameter. \"SRADAU\" [\"InitialisationNLSolver\" := \"BDNLSOL\";\n \"LASolver\" := \"MA48\";\n \"ReinitialisationNLSolver\" := \"BDNLSOL\";\n \"AbsoluteTolerance\" := 1E-5;\n ...",t:"The SRADAU solver"},"181":{i:0.00174487739059874,u:"../Content/Topics/c8364.html",a:"At the start of each simulation, gPROMS analyses the mathematical model so as to assist the user in identifying structural problems and errors\n in the modelling and/or the problem specification. In particular, gPROMS attempts to determine: if the model is well-posed and whether alternative ...",t:"Model Analysis and Diagnosis"},"182":{i:0.00174487739059874,u:"../Content/Topics/x8375.html",a:"In order for gPROMS to solve the underlying equation system associated with a given simulation, the model must be well-posed and all\n degrees-of-freedom must be specified correctly. If there are  too many  or  too\n few  assignments for the degrees-of-freedom then gPROMS will issue an error upon ...",t:"Well-posed models and degrees-of-freedom"},"183":{i:0.00248646692468234,u:"../Content/Topics/x8380.html",a:"An over-specified system is one which either itself consists of more equations than unknown variables, or involves an over-specified\n sub-set of equations and unknowns. Mathematically, it can be shown that any over-specified system will contain at least one\n sub-system involving k equations in only ...",t:"Case I: over-specified systems"},"184":{i:0.00248646692468234,u:"../Content/Topics/x8397.html",a:"An under-specified system has more unknown variables than equations. In this case, gPROMS diagnoses the problem and provides a list of\n candidate variables for Assignment (while advising against Assigning differential variables). This is illustrated by the gPROMS code\n below: Example 2. Illustrative ...",t:"Case II: under-specified systems"},"185":{i:0.00322805645876594,u:"../Content/Topics/x8408.html",a:"Consistent initialisation of DAE systems is often related to their index. The index of a DAE system is defined as the\n minimum number of differentiations with respect to time that are necessary in order to obtain the time derivatives of all\n    variables, i.e. to reduce the system to a set of ...",t:"High-index DAE systems"},"186":{i:0.00265951583494634,u:"../Content/Topics/x8425.html",a:"Most DAE systems follow the rule that the number of initial conditions specified must be equal to the number of differential variables in\n the system. This is true for ODEs as well. Although the initial conditions do not need to be specified directly in terms of the differential\n variables (e.g. the ...",t:"Origin of index and the initialisation of DAEs"},"187":{i:0.00202745798341723,u:"../Content/Topics/x8460.html",a:"This is an example where a simplification to an index-1 system results in a high-index system. The following is the EQUATION section of\n a gPROMS Model of a constant-volume mixing tank. EQUATION\n FOR i := 1 TO NoComp DO\n $M(i) = SIGMA( F_in*x_in(i,) ) - F_out*x(i) ;\n END\n M_total = SIGMA(M) ;\n rho*V ...",t:"Constant-volume mixer example"},"188":{i:0.00327788071185701,u:"../Content/Topics/x8484.html",a:"This example illustrates how a very simple model can still become high index, given the wrong input specification. This is a model of a\n well-stirred tank used to heat a single-component stream. EQUATION\n rho*V*$u = F*(h_in - h) + Q ;\n u = PhysProp.InternalEnergy(T) ;\n h = PhysProp.Enthalpy(T) ; ...",t:"Heater example"},"189":{i:0.00202745798341723,u:"../Content/Topics/x8523.html",a:"In this example, we have a batch-reactor model with reversible reactions at equilibrium. The general material balance for this problem\n is: FOR i := 1 TO NoComp DO\n $M(i) = V*SIGMA( r*nu(i,) ) ;\nEND where, M(i) is the molar holdup of component i, V is the volume of the reaction\n mixture, r(j) is the ...",t:"Chemical-equilibrium example"},"190":{i:0.00294209642776483,u:"../Content/Topics/x8555.html",a:"gPROMS is able to reduce the index of problems automatically. However, it initially reports problems of high index and informs the user\n how to turn on index reduction. Index reduction is off by default because it is usually better to develop index-1 models rather than rely on\n gPROMS to reduce the ...",t:"Automatic index reduction in gPROMS"},"191":{i:0.00174487739059874,u:"../Content/Topics/x8604.html",a:"Currently, the following limitations exist for Models and Processes to which automatic index reduction can be applied When the Index-Reduction code detects that an equation inside an IF or CASE block needs to be differentiated to reduce the index,\n gPROMS will issue an error message and stop ...",t:"Limitations"},"192":{i:0.00294209642776483,u:"../Content/Topics/x8614.html",a:"This section is aimed at the interested reader who would like a more detailed mathematical analysis of the causes of high index and how it\n may be avoided or remedied. None of the content here is required for an understanding of how gPROMS reports and rectifies high-index problems,\n so it is safe to ...",t:"High-index DAEs, initialisation and integration"},"193":{i:0.00812384878658369,u:"../Content/Topics/x8634.html",a:"It can be shown that most DAE systems of the form: are similar to ODEs in several ways. In particular, one can specify as many arbitrary initial conditions as there are differential\n variables  are similar to ODEs in several ways. In particular, one can specify as many arbitrary initial conditions ...",t:"A simple example of an index-1 DAE system"},"194":{i:0.00542273427014346,u:"../Content/Topics/x8799.html",a:"In this section, two examples of high-index systems are described. Consider, for this first example, a slightly modified version of the index-1 system ( ) described  previously : the only difference being between   and . We immediately note that we can no longer specify arbitrary initial values for ...",t:"Simple examples of high-index DAE systems"},"195":{i:0.00298663601605825,u:"../Content/Topics/x9436.html",a:"The issue of consistent initialisation of DAE systems is closely related to their classification according to their\n        index. The index of 1 can be defined as the minimum number of differentiations with respect to time that are necessary to\n obtain the time derivatieve of all variables (i.e. ...",t:"Index classification of DAE systems"},"196":{i:0.00224504648197465,u:"../Content/Topics/x9818.html",a:"A further complication with DAE systems of high index is that the usual numerical algorithms are generally incapable of controlling the\n error of integration, and this very often leads to failure, or, even worse, spurious solutions! For these reasons, DAE systems of index higher than 1 are usually ...",t:"Integration of high-index DAE systems"},"197":{i:0.00252762707479314,u:"../Content/Topics/x10114.html",a:"This section is concerned with a detailed mathematical analysis of the following three examples of high-index DAEs in\n process-engineering applications. Fixed Volume Mixing Tank Heater Tank Chemical Equilibrium Some conclusions of the analysis are given  here .",t:"High-index DAEs in process-engineering applications"},"198":{i:0.00325188991970604,u:"../Content/Topics/x10129.html",a:"We consider the well-stirred tank, shown in the figure below, used to mix two streams under isothermal conditions.  Constant-volume mixer tank The mathematical model of the system is: This is a set of (2 + 4) equations in the (2 + 4) variables , , ; , , , . The system contains differential equations ...",t:"Fixed-volume mixing tank"},"199":{i:0.00450231264814582,u:"../Content/Topics/x10780.html",a:"Consider a well-stirred tank used to heat up a single-component stream: To define this system fully, we need an additional relation characterising the heating rate  . For instance,  could be described by a heat-transfer mechanism from a steam jacket at a given temperature  : Overall, equations  to  ...",t:"Heater tank"},"200":{i:0.00302360105692356,u:"../Content/Topics/x11356.html",a:"Consider a constant-volume well-stirred reactor carrying out the gas-phase dimerisation reaction: at a given temperature, . The mathematical model of this system comprises the equations: Here we have assumed perfect-gas behaviour (equation ) and that the exit flowrate is a function of the difference ...",t:"Systems of high-index DAEs in chemical equilibrium"},"201":{i:0.00174487739059874,u:"../Content/Topics/x12089.html",a:"The handling of the high-index complications in the  previous example  was\n relatively straightforward. However, in general, things may be much more conplicated, for instance, if we had non-ideal behaviour (with\n chemical equilibrium expressed in terms of fugacities rather than partial pressures, as ...",t:"Example of index reduction in chemical equilibrium"},"202":{i:0.00228201152283996,u:"../Content/Topics/x12577.html",a:"The three examples presented in this section allow us to draw certain more general conclusions: High-index DAEs often arise in process-engineering applications due to \"simplifications\" that impose additional constraints on the\n differential variables (or quantities directly related to them – cf. ...",t:"Some general conclusions"},"203":{i:0.00202745798341723,u:"../Content/Topics/x12621.html",a:"Once gPROMS has checked that the system is well-posed, square and of index 1, it checks the consistency of the initial conditions and\n identifies sub-systems that are over- or under-specified at t = 0. For example, consider the system shown in the gPROMS code\n below: Example 3. Illustrative example: ...",t:"Inconsistent initial conditions"},"204":{i:0.00174487739059874,u:"../Content/Topics/c12654.html",a:"Initialisation procedures are a way to control more precisely how gPROMS initialises models. For complex models, this can substantially reduce the\n time taken to initialise them and also increase the robustness of the models (i.e. initialisation can be performed successfully for a wider set of\n ...",t:"Initialisation Procedures"},"205":{i:0.00174487739059874,u:"../Content/Topics/x12659.html",a:"To specify and use Initialisation Procedures for non-composite Models (i.e. Models that contain no Model instances (UNITs)), you need to: Specify at least one Initialisation Procedure in the Model Specify which Initialisation Procedure to use in the Process",t:"Initialisation Procedures for Non-Composite Models"},"206":{i:0.00298085994740474,u:"../Content/Topics/x12670.html",a:"There are four basic techniques associated with Initialisation procedures. These are: Initialisation Procedures that  change the value of a Parameter Initialisation Procedures that  change the value of a Degree of Freedom  (Specification) Initialisation Procedures that  change the choice of a Degree ...",t:"Specifying Initialisation Procedures in the Model"},"207":{i:0.00295905262225137,u:"../Content/Topics/x12715.html",a:"gPROMS initialisation procedures allow the model developer to specify a set of Parameter values that will guarantee successful\n initialisation. From this solution of the simplified problem the Parameter values are replaced with the desired ones in such a way that the model\n will always initialise. ...",t:"Changing the Value of a Parameter"},"208":{i:0.00295905262225137,u:"../Content/Topics/x12758.html",a:"The previous section described how models can be made more robust during initialisation. The approach was to use a gPROMS Initialisation\n Procedure to specify a set of Parameter values that guarantees initialisation and how these can be replaced by the desired values in a way that\n ensures ...",t:"Changing the Value of a Degree of Freedom"},"209":{i:0.00295905262225137,u:"../Content/Topics/x12778.html",a:"In some cases, simply changing the values of ASSIGNed variables may not be sufficient to guarantee successful initialisation. The Model user\n may have chosen a particular set of Variables to ASSIGN that could cause difficulty or failure during initialisation. To avoid such possibilities,\n ...",t:"Changing the Choice of a Degree of Freedom"},"210":{i:0.00295905262225137,u:"../Content/Topics/x12837.html",a:"When developing very detailed models, it is often better to start with a simple model and gradually add more complexity. This is because\n initialising the fully-detailed model may be too difficult without good initial guesses. With a much simpler model, one can obtain a solution from\n a poor initial ...",t:"Simplifying Equations"},"211":{i:0.00174487739059874,u:"../Content/Topics/x12886.html",a:"When gPROMS peforms a standard intialisation (i.e. without using any user-defined Initialisation Procedures) of a Model containing CASE\n statements, the active branches of all CASE statments are determined by the values of the Selector Variables specified in\n the INITIAL_SELECTOR section of the ...",t:"Behaviour of CASE branches during initialisation"},"212":{i:0.00401027225499545,u:"../Content/Topics/x12891.html",a:"Initialisation Procedures for non-composite Models must contain at least one START section and then optionally any number of NEXT\n sections. The START section specifies which Parameters, Variables or Selector Variables are to be changed during initialisation. The START section may\n contain any ...",t:"Specifying the sequence of Actions in Initialisations Procedures"},"213":{i:0.00174487739059874,u:"../Content/Topics/x12904.html",a:"The START section may contain any number of actions START\n  aParameter := 0 ;\n  aVariable := 0 ;\n  REPLACE\n    anotherVariable\n  WITH\n    aThirdVariable := 0 ;\n  END\n  aSelector := Simple ;\nEND In this example, all four actions are included: changing a Parameter value, changing a Variable value ...",t:"The START section may contain any number of actions:"},"214":{i:0.00174487739059874,u:"../Content/Topics/x12908.html",a:"Explicitly reverting changes INITIALISATION_PROCEDURE IP_Example1\n  START\n    aParameter := 0 ;\n    aVariable := 0 ;\n    REPLACE\n      anotherVariable\n    WITH\n      aThirdVariable := 0 ;\n    END\n    aSelector := Simple ;\n  END\n\n  NEXT\n    MOVE_TO\n      REVERT aParameter ;\n      REVERT aVariable ;\n  ...",t:"Explicitly reverting changes:"},"215":{i:0.00174487739059874,u:"../Content/Topics/x12912.html",a:"The implicit final step when no NEXT section is specified INITIALISATION_PROCEDURE IP_Example1\n  START\n    aParameter := 0 ;\n    aVariable := 0 ;\n    REPLACE\n      anotherVariable\n    WITH\n      aThirdVariable := 0 ;\n    END\n    aSelector := Simple ;\n  END\nEND Here, no NEXT sections are present, so ...",t:"The implicit final step when no NEXT section is specified:"},"216":{i:0.00174487739059874,u:"../Content/Topics/x12916.html",a:"Making more than one change to a Variable/Parameter before reverting it INITIALISATION_PROCEDURE IP_Example2\n  START\n    aParameter := 0 ;\n    aVariable := 0 ;\n    REPLACE\n      anotherVariable\n    WITH\n      aThirdVariable := 0 ;\n    END\n    aSelector := Simple ;\n  END\n\n  NEXT\n    MOVE_TO\n      ...",t:"Making more than one change to a Variable/Parameter before reverting it:"},"217":{i:0.00174487739059874,u:"../Content/Topics/x12926.html",a:"Reverting some simplifications in parallel and some in sequence INITIALISATION_PROCEDURE IP_Example3\n  START\n    aParameter := 0 ;\n    aVariable := 0 ;\n    REPLACE\n      anotherVariable\n    WITH\n      aThirdVariable := 0 ;\n    END\n    aSelector := Simple ;\n  END\n\n  NEXT\n    MOVE_TO\n      REVERT ...",t:"Reverting some simplifications in parallel and some in sequence:"},"218":{i:0.00174487739059874,u:"../Content/Topics/x12931.html",a:"A more complex example procedure INITIALISATION_PROCEDURE IP_Example4\n  START\n    aParameter := 0 ;\n    aVariable := 0 ;\n    REPLACE\n      anotherVariable\n    WITH\n      aThirdVariable := 0 ;\n    END\n    aSelector := Simple ;\n  END\n\n  NEXT\n    MOVE_TO\n      REVERT aParameter ;\n      aVariable := 1 ...",t:"They can all be combined:"},"219":{i:0.00174487739059874,u:"../Content/Topics/Iterative procedures.htm",a:"Rather than having a fixed number of NEXT statements, it may be desirable to implement an iterative procedure which is controlled by a termination criterion or which performs a  configurable number of steps. This can be achieved using a WHILE statement in conjunction with a JUMP_TO in a NEXT group. ...",t:"Iterative procedures"},"220":{i:0.00210684776520305,u:"../Content/Topics/x12942.html",a:"Specifying how reversions are performed Earlier sections have described how to make changes to Parameters, Variables and Equations during initialisation and in which order these\n changes should be reverted back to the original specifications. How these reversions are performed has not yet been ...",t:"Specifying how the reversions are performed"},});