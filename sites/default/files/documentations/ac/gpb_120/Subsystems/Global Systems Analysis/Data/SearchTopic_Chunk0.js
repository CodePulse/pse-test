define({"0":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Global Systems Analysis.htm",a:"Global System Analysis (GSA) permits the investigation of the global behaviour of a system. In contrast to simulation, in which specific values are assigned to system inputs and the values of key outputs are reported, in GSA it is possible to specify a range of input values of interest and therefore ...",t:"What is Global System Analysis?"},"1":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/User perspectives.htm",a:"User perspectives GSA has two general applications: To investigate the behaviour of an existing flowsheet, from the perspective of the system To gain insight into a  model, from a modelling perspective. Both perspectives are addressed in this documentation.  ",t:"User perspectives"},"2":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/System analysis.htm",a:"Once the  system is set up and the model or flowsheet can be successfully simulated, GSA can be used to conduct various types of analysis and  find solutions for a number of problems, for example: Scenario or parametric analysis How is system performance affected  when process inputs are changed? ...",t:"System analysis"},"3":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Model analysis.htm",a:"GSA can be used to support modelling activities in many areas, for example: Model analysis What range of temperature and composition can be expected to be observed for a range of input values? How robust is the solution of the model over a wide range of conditions? A simple case study can be found  ...",t:"Model analysis"},"4":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/What experience do I need.htm",a:"The simplest application of GSA is a  scenario or parametric analysis . It is the most straightforward to set  up and easier to interpret. It is recommended that new users start with a parametric or scenario analysis. In contrast,  uncertainty analysis  is more complex because it requires correct ...",t:"Getting started"},"5":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/General advice.htm",a:" General advice from Saltelli et al. (2008) on how to  avoid well-known pitfalls, is paraphrased below: Clearly identify the goal of the analysis Refrain from analysing too many responses at once.  Failing to do either will return meaningless data. In addition, for uncertainty and sensitivity ...",t:"General advice"},"6":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/What kind of analysis can.htm",a:"GSA can perform three types of analysis: Scenario or parametric Uncertainty Sensitivity The purpose of each type of analysis differs widely: Scenario or parametric sensitivity analysis is a series of simulations where the values of one or more factors are varied over a grid to investigate the ...",t:"Types of analysis"},"7":{i:0.0313605223750639,u:"../Content/Global Systems Analysis/Description of case study.htm",a:"A single system is used, in this guide, to illustrate the different types of analysis GSA can be used for, from both system and modelling perspectives.  Consider a simple continuous flow stirred tank reactor (CSTR), as shown in the figure below. The variables in blue are typical factors and the ...",t:"Description of the illustrative example system"},"8":{i:0.0182807653627993,u:"../Content/Global Systems Analysis/Scenario analysis parametric.htm",a:"In a scenario or parametric analysis the impact of  factor variability on a response is determined. This is achieved by executing simulations for different factor values and investigating their effect on the response. Although this can be achieved by executing several simulations manually, using GSA ...",t:"Scenario or parametric analysis"},"9":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Illustrative example of parametric.htm",a:"In this example, GSA is used to perform a parametric analysis to determine how the inlet mole fraction affects the yield and temperature in a CSTR reactor.  There is one factor, the inlet molar fraction, and two responses, yield and temperature. The yield is plotted against the inlet molar fraction, ...",t:"Illustrative example of a parametric case study"},"10":{i:0.0227165028871784,u:"../Content/Global Systems Analysis/Uncertainty analysis.htm",a:"An uncertainty analysis can be used to determine what effect the uncertainty in the factors has on the uncertainty in the responses. This type of analysis can be accomplished using the Monte Carlo method. The Monte Carlo method performs multiple model evaluations (simulations) with deterministic ...",t:"Uncertainty analysis"},"11":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Illustrative example of an.htm",a:"In this example, GSA is used to understand how uncertainty in reaction kinetics affects the production of methyl acetate in a CSTR reactor.  An uncertainty analysis is performed with focus on the key chemical reaction of the process. The factors are the reaction activation energy and reaction ...",t:"Illustrative example of an uncertainty analysis"},"12":{i:0.0178689902749978,u:"../Content/Global Systems Analysis/Sensitivity analyses.htm",a:"Sensitivity analysis can be used to determine which factor contributes the most to the uncertainty in a response. Note that the variance in a response can be caused by the combination of three distinct elements: The importance of the factor, that is, how sensitive the response is to the variability ...",t:"Sensitivity analysis"},"13":{i:0.0161509778761223,u:"../Content/Global Systems Analysis/Elementary effect sensitivity.htm",a:"The elementary effects method is a simple but effective way of identifying a few important factors from a large number of factors in a complex model. This method is ideal when the number of probabilistic factors is high and/or the model is expensive to compute.  The fundamental idea behind the ...",t:"Elementary effects sensitivity method"},"14":{i:0.0207271592671872,u:"../Content/Global Systems Analysis/Variance based sensitivity.htm",a:"The variance-based method is the most comprehensive sensitivity method available in gPROMS. It  determines the contribution of each factor to  the variance in a response.   The metrics used are based on variances and are indicative of what part of the variance, in the response, is attributed to the ...",t:"Variance-based sensitivity method"},"15":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Including deterministic factors.htm",a:"Although sensitivity methods require probabilistic factors, it is also possible to include deterministic ones. Sensitivity analysis is then performed as per the deterministic scenario.  A scenario represents a single element from the set of all possible combinations of deterministic values. In other ...",t:"Including deterministic factors in sensitivity analysis"},"16":{i:0.0122642738021451,u:"../Content/Global Systems Analysis/How to select and define factors.htm",a:"Factors are user-specified inputs to a system which are uncertain or experience variability. Internally, a factor is mapped to a scalar element of an assigned gPROMS variable 1 If it is attempted to map a factor to a continuous distribution or an array, the selection dialog will denote this with an ...",t:"How to select and define factors"},"17":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Selecting lower upper bounds.htm",a:"The lower and upper bounds of factors should be inferred from the region of interest and must be within the bounds of the mapped variable. Any bound violations are detected and warnings displayed.  Factors can be disabled via a checkbox, which is enabled by default. Disabled factors remain constant ...",t:"Selecting lower and upper bounds and distribution"},"18":{i:0.0380091555367466,u:"../Content/Global Systems Analysis/Including correlated factors.htm",a:"Correlated factors are only of interest when distributions are used, and therefore are of no consequence for scenario or parametric analysis.  At present, correlated factors can only be included for uncertainty analysis. This of interest when information about the correlation, in the form of a ...",t:"Including correlated factors/multivariate distributions"},"19":{i:0.0163664250933006,u:"../Content/Global Systems Analysis/Influence of shape of factor.htm",a:"Typically, the shape of the factor space is only of interest for uncertainty and sensitivity analyses, and not for scenario or parametric analysis. The shape and size of the factor space from which samples are drawn is determined by: The lower and upper bounds of each factor The type of distribution ...",t:"Influence of factor space shape"},"20":{i:0.0136368574281498,u:"../Content/Global Systems Analysis/Including sampling restrictions.htm",a:"Sampling restrictions are used to exclude sections of the sampling space from the analysis. These  are constraints imposed on factors in addition to their lower and upper bounds, in order to avoid the execution of factor combinations which are not of interest, or may cause a failure.  It is possible ...",t:"Including sampling restrictions"},"21":{i:0.0122642738021451,u:"../Content/Global Systems Analysis/Recommended number of samples.htm",a:"The different types of number of samples generated in GSA are distinguished as follows: The number of discrete deterministic samples is calculated directly from the specification of deterministic factors. The number of uncertainty scenarios/probability distribution samples is user specified. The ...",t:"Recommended number of factors and samples"},"22":{i:0.0122642738021451,u:"../Content/Global Systems Analysis/How to select responses.htm",a:"Responses are the user-specified outputs  from a system, whose values are functions of the factors and are computed via simulation of the model or flowsheet. Internally, a response is mapped onto a scalar element of an unassigned gPROMS variable.    Similar to factors, responses can be specified in ...",t:"How to select responses"},"23":{i:0.0218723591841784,u:"../Content/Global Systems Analysis/Selection of sample generation.htm",a:"Sample generation is only of interest when probabilistic factors are present. Two types of sample generation methods are supported: Pseudo-random sampling (using pseudo-random number generator Mersenne Twister MT19937) Quasi-random (Sobol) sampling. Pseudo-random sampling generates a more realistic ...",t:"Selection of the sample generation method"},"24":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Note on random sampling seed.htm",a:"Generating a set of truly random data points is extremely difficult. In gPROMS, all random generators are pseudo-random and produce a set of points that appears random. The starting point of this random data set is determined by a seed, for which all generated data sets are always identical. The ...",t:"Note on random sampling seed"},"25":{i:0.0122642738021451,u:"../Content/Global Systems Analysis/Including results elements.htm",a:"Result elements can be added to the GSA entity so that they are automatically generated and added to the Case upon execution. The result elements listed and shown in the figure below are available according to type of analysis. Result elements pertinent to all types of analysis: Distribution ...",t:"Including result elements in the GSA entity"},"26":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/How do I set up a GSA analysis.htm",a:"To set  up a GSA entity, reproduce the steps below. Load the Project which contains the model or flowsheet of interest. Create a new entity by selecting \u0027New entity...\u0027 in the \u0027Entity\u0027 menu, by pressing Control+C or by right-clicking on the Project and selecting \u0027New entity...\u0027.  Definition of a new ...",t:"Summary of the required steps to set up an analysis"},"27":{i:0.0263029725641471,u:"../Content/Global Systems Analysis/Executing resuming a GSA.htm",a:"Before the execution of a GSA activity can be launched, a number of prerequisites must be satisfied: The GSA entity editor refers to a valid base activity (currently limited to Processes). All factors and responses are valid for the specified base activity. At least one factor is enabled. At least ...",t:"Executing and resuming a GSA activity"},"28":{i:0.0165158587432055,u:"../Content/Global Systems Analysis/Creating results elements.htm",a:"A Case is created at the launch of a GSA activity and is populated with the contents, below, at the end of execution. Results folder Output files related to foreign objects, if applicable The GSA report file (with extension .gsareport), which contains a brief overview of the activity The GSA results ...",t:"Creating results elements and analysing results"},"29":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Results folder.htm",a:"The scope  of this section is limited to  the elements in the Results folder which are directly related to GSA. GSA report file An example of a GSA report is shown below: \nGSA Report Summary\n\n  Execution started: Thu Apr 20 20:35:50 2017\n  Execution ended  : Thu Apr 20 20:35:51 2017\n\n  Factors:      ...",t:"Results folder"},"30":{i:0.0178884423692102,u:"../Content/Global Systems Analysis/System Analysis Group.htm",a:"System Analysis Group folder Several result elements can be created according to the type of analysis to perform. Applicable to all types of analysis: Distribution statistics table Histogram 2D scatter plot Limited to sensitivity analysis:  Factor sensitivity table",t:"System Analysis Group folder"},"31":{i:0.0151048190889044,u:"../Content/Global Systems Analysis/Distribution statistics table.htm",a:"The distribution statistics table simultaneously displays a number of metrics for both factors and responses, described below. The expected value, that is, the mean value of a  uniform distribution, is given by: Note that, for uniformly distributed probabilities,  Notation The standard deviation is ...",t:"Distribution statistics table"},"32":{i:0.0151048190889044,u:"../Content/Global Systems Analysis/Histogram.htm",a:"A histogram shows how the values are distributed for each factor or response. This is particularly useful for uncertainty propagation as it is easy to  observe the dispersion in responses as a result of the uncertainty and range of factor values. Similarly, it can be used to visualise the ...",t:"Histogram"},"33":{i:0.0151048190889044,u:"../Content/Global Systems Analysis/2D scatter plot.htm",a:"A 2D scatter plot is a two-dimensional plot which can display the sample values for factors, responses or a combination of both. It is possible to use a 2D scatter plot to visualise how factor and/or response values are distributed over the sampling space and detect patterns and/or correlations in ...",t:"2D scatter plot"},"34":{i:0.0151048190889044,u:"../Content/Global Systems Analysis/Factor sensitivity table.htm",a:"The factor sensitivity table displays different measures  for each sensitivity analysis method, which are interpreted very differently: Elementary effects The mean is indicative of the importance of the factor in the variance of a response, and higher values denote higher impact. Although the ...",t:"Factor sensitivity table"},"35":{i:0.0217282522224692,u:"../Content/Global Systems Analysis/Ensuring convergence.htm",a:"Typically, the optimal number of samples is unknown beforehand, that is, the minimum number of samples which produces accurate results. The optimal number of samples is case specific and depends on the attributes below, among others: System non-linearity, that is, the degree of non-linear equations ...",t:"Ensuring convergence"},"36":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Overview of supported functionalities.htm",a:"Summary of supported functionalities A brief overview of the supported functionalities for each type of analysis is shown below. Although some restrictions are inherent to the analysis method used, others are features which have yet to be implemented.  ",t:"Summary of supported functionalities"},"37":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Case studies Model level.htm",a:"A GSA example Project named \u0027GSA Case Studies\u0027 can be found in the \u0027General capabilities\u0027 \u003e \u0027Global System Analysis\u0027examples folder of the installation directory. The features of the Model are described below. Consider a simple CSTR reactor, as shown in the figure below. The variables in blue are ...",t:"Case studies"},"38":{i:0.0129048128276139,u:"../Content/Global Systems Analysis/Case 1 Get a feel for the.htm",a:"A gPROMS model typically has some degrees of freedom which are satisfied by assigning values to variables. Different assigned values typically result in different model behavior. To assess the robustness of a model  or gain insight into its behaviour, it is possible to obtain the results of a number ...",t:"Case 1: Understanding the model"},"39":{i:0.0171762556019657,u:"../Content/Global Systems Analysis/Case 2 Determining parameter.htm",a:"If there are limited resources to improve parameter estimates, identify which parameters most influence the KPIs. GSA can be used to sort  the importance of parameters for each response.   GSA entity \u0027Case2_ParaImportance\u0027 demonstrates how to set  up such an analysis. The necessary settings for the ...",t:"Case 2: Determining parameter importance"},"40":{i:0.0177088555186306,u:"../Content/Global Systems Analysis/Case 3 Parameter uncertainty.htm",a:"Parameter values used in models are usually sourced from literature, expert knowledge, historical data and/or parameter estimation using experimental data. Therefore, uncertainties are inevitable. GSA can be used to assess the effect of parameter uncertainty on KPIs and determine whether they are ...",t:"Case 3: Parameter uncertainty effect on KPIs"},"41":{i:0.0129048128276139,u:"../Content/Global Systems Analysis/Case 4 Select decision variables.htm",a:" Process models can be used to maximize production and minimise cost, among others. In an optimisation problem, the decision variables which affect the objective function and constraints must be determined first. GSA can be used to identify which variables influence the objective function or ...",t:"Case 4: Selecting decision variables for optimisation "},"42":{i:0.0129048128276139,u:"../Content/Global Systems Analysis/Case 5 Effect of decision.htm",a:" After executing an optimisation activity, it is important to understand the effect of uncertainties in decision variables on the objective function and constraints. For example, since the coolant temperature cannot be perfectly controlled, variations are inevitable in practice. GSA can be used to ...",t:"Case 5: Effect of decision variable uncertainty on the objective function and constraints "},"43":{i:0.0225128982096473,u:"../Content/Global Systems Analysis/Case 6 Model uncertainty.htm",a:" Reaction mechanisms are not always known beforehand. Consequently, there may be more than one feasible expression for the reaction rate and it may be difficult, or even impossible to determine which is the most appropriate. GSA can be used to study the effect of such model uncertainties on KPIs.  ...",t:"Case 6: Model uncertainty "},"44":{i:0.0161075079549584,u:"../Content/Global Systems Analysis/Case 7 parametric case study.htm",a:"High fidelity models can reduce experimental work to a large extent. The simulation of high fidelity models enables safe and efficient experimentation to obtain solutions to a number of \u0027what if\u0027 problems.  GSA can further improve this efficiency by simulating multiple scenarios with a single GSA ...",t:"Case 7: Model level parametric case study"},"45":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Case 8 System level parametric.htm",a:"Case 8: System level parametric case study   A system level parametric analysis can be performed to gain insight and provide support for system level decisions. For example, it is possible to perform a system level parametric analysis to determine how coolant water affects the total cost of a ...",t:"Case 8: System level parametric case study  "},"46":{i:0.0174809942186788,u:"../Content/Global Systems Analysis/Case 9 Elementary effect sensitivity.htm",a:"There are two methods available for sensitivity analysis, elementary effects and variance-based. Elementary effects is a simple but effective way of identifying a few important factors from a large number of factors in a complex model. This method is ideal when the number of probabilistic factors is ...",t:"Case 9: Elementary effects sensitivity analysis"},"47":{i:0.0209115506459751,u:"../Content/Global Systems Analysis/A basic principle underlying.htm",a:"GSA is based on drawing samples from the system under study, that is, taking different values for each factor and calculating the corresponding response values. One of the features and basic principles underlying GSA is that extracting random samples from a system permits the estimation  of its mean ...",t:"Basic principles underlying GSA"},"48":{i:0.130444231423145,u:"../Content/Global Systems Analysis/Principles underlying sensitivity analysis.htm",a:"In GSA, the calculated sensitivity measures are sensitivity indices rather than mathematical sensitivities (derivatives). For example, consider the equation below: where all variables are algebraic and both x1 and x2 are assumed to have values between 0 and 10. Their mathematical sensitivities are ...",t:"Principles underlying sensitivity analysis"},"49":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Practical advice.htm",a:"It is not advisable to use more than 15 to 20 factors at a time. Consider an example where there is a requirement  to generate n points per dimension in an equal gridded fashion, in d dimensions, which requires nd samples. To generate 3 points in 20 dimensions, close to 3.5 billion samples are ...",t:"Practical advice"},"50":{i:0.035082150132155,u:"../Content/Global Systems Analysis/Coordinate transformation.htm",a:"The ellipsoid is expressed by a well-known correlation. To implement a coordinate transformation which returns an ellipsoid, consider the ellipsoid in the figure below: Example of an ellipsoid This ellipsoid can be described in terms of radius r and angle α like so: Notation By analysing the data in ...",t:"Coordinate transformation – ellipsoid"},"51":{i:0.0377112473488498,u:"../Content/Global Systems Analysis/Dynamic models workarounds.htm",a:"By default, GSA collects results at the end of the time horizon. While for steady-state simulation this is at time equal to zero, for dynamic simulation it is the end of the simulation. Therefore, to gain insight into dynamic behaviour, two workarounds can be used: To obtain results at different ...",t:"Workarounds for dynamic models"},"52":{i:0.0113034652639417,u:"../Content/Global Systems Analysis/Known issues limitations some.htm",a:"Tips Ensure that no foreign process interface (FPI) is active. Foreign Objects can be used. Long initialisation procedures may slow  down GSA execution.  Saved variable sets should be used instead. Limitations Only the last point in a simulation is reported. Although steady-state analysis is more ...",t:"Known issues, limitations and tips"},"53":{i:0.0224824176993056,u:"../Content/Global Systems Analysis/Licensing requirements.htm",a:"GSA and HPC are licensed features. Please contact your account manager to obtain the necessary licenses. Global System Analysis (GSA) license feature, to execute GSA with a minimum of one worker High-performance computing (HPC), to execute GSA and Parameter Estimation activities with up to 32 ...",t:"Licensing requirements"},});