define({"0":{i:0.00664851492830528,u:"../Content/Topics/c251.html",a:"Physical Properties interfaces to gPROMS: Physical property packages form a special class of Foreign Objects (see above) that are\n encountered very frequently in practice. A number of widely-used physical property packages are already interfaced to gPROMS.  Simple materials  describes how to ...",t:"Overview"},"1":{i:0.0117917071747398,u:"../Content/Topics/c257.html",a:"Most non-trivial process models make use of physical properties, such as density, enthalpy and fugacity, all of which are typically functions of\n temperature, pressure and composition. The accuracy of estimation of these physical properties is one of the most critical factors in determining the\n ...",t:"Using Physical Properties for Simple Materials"},"2":{i:0.129581619966575,u:"../Content/Topics/x280.html",a:"External physical property packages are interfaced to gPROMS via the latter\u0027s Physical Property Interface (PPI). The PPI recommends that a\n    minimal set of physical property calculations are supported by any such external package. These are listed in the tables below and\n include most of the ...",t:"The set of physical properties supported by gPROMS"},"3":{i:0.0373542726028972,u:"../Content/Topics/x755.html",a:"External physical property packages are interfaced to gPROMS as Foreign\n Objects. The usage of physical property Foreign Objects in Models is governed by a set of simple rules: Each distinct Physical Property Foreign Object used by a Model is declared as a Parameter of type FOREIGN_OBJECT. The ...",t:"Incorporating physical properties in Models"},"4":{i:0.0109060202240585,u:"../Content/Topics/x815.html",a:"We have seen how physical property calculations can be incorporated within Models, being provided by external physical property packages.\n However, before these Models can be used to perform, say, a simulation of a given process, some additional information relating to physical properties\n needs to ...",t:"Using Models incorporating physical property calculations"},"5":{i:0.034997509628099,u:"../Content/Topics/x825.html",a:"Consider the flash model example. 1 # model entity \"Flash\"\n \n 2 PARAMETER\n 3 PPP AS FOREIGN_OBJECT \"Multiflash\"\n 4 NoComp AS INTEGER\n 5 Mw AS ARRAY(NoComp) OF REAL\n \n 6 VARIABLE\n 7 F, L, V AS MolarRate\n 8 Hf AS MolarEnergy\n 9 Q AS EnergyRate\n10 T AS Temperature\n11 P AS Pressure\n12 x, y, z AS ...",t:"Example 1: Explicit specification within a primitive Model"},"6":{i:0.0122997990574779,u:"../Content/Topics/x833.html",a:"Consider Setting Foreign Object values within composite Models, for example, the Model TwoTankSystem illustrated in the listing below: 1 # model entity \"TwoTankSystem\"\n \n 2 PARAMETER\n 3 LPPP AS FOREIGN_OBJECT \"Multiflash\"\n \n 4 VARIABLE\n 5 TotalVolFlow AS VolumeRate\n \n 6 UNIT\n 7 HighPTank AS Flash\n 8 ...",t:"Example 2: Explicit specification within a higher-level Model"},"7":{i:0.00664851492830528,u:"../Content/Topics/x840.html",a:"Setting a Physical Properties Foreign Object value within a Process is illustrated in the listing below. Lines 2 and 3 declare an instance\n called Plant of the composite Model defined in the listing in:  Explicit specification\n within a higher-level Model . The value of the Foreign Object parameter ...",t:"Example 3: Explicit specification within a Process"},"8":{i:0.00664851492830528,u:"../Content/Topics/x845.html",a:"Like other gPROMS Parameters, the values of Physical Properties Foreign Objects may be specified implicitly via the gPROMS parameter\n propagation mechanism. Parameter propagation is invoked automatically by gPROMS at the start of the execution of a Process if the value of any Foreign Object ...",t:"Example 4: Implicit specification via parameter propagation"},"9":{i:0.063153887789335,u:"../Content/Topics/x866.html",a:"The MultiflashTM physical property interface Multiflash is a physical property package developed and marketed by Infochem Computer Services Ltd. 1 See http://www.infochemuk.com.  A gPROMS interface for Multiflash providing the functionality described in the first section in this chapter on the  ...",t:"The Multiflash physical property interface"},"10":{i:0.00664851492830528,u:"../Content/Topics/x891.html",a:"Errors may occur at two different two stages when using Multiflash in gPROMS: During the creation of the Multiflash instance at the start of the simulation This type of failure will almost always be caused by a mistake (e.g. syntax error) in the Multiflash input file. Any error at this stage\n will ...",t:"Error handling in the gPROMS/Multiflash interface"},"11":{i:0.0122997990574779,u:"../Content/Topics/x921.html",a:"\"Units of measurements\" refers to the quantities listed in the two tables in:  Set of\n Physical Properties supported by gPROMS . The units for the input quantities are: temperature T: Kelvin pressure P: Pa amount of substance, n: mol. This is the default unit. The amount of substance can ...",t:"Units of measurement"},"12":{i:0.0115627172496112,u:"../Content/Topics/x1046.html",a:"The interface to Multiflash supports all the methods listed in the topic in  \u0027The set of physical properties supported by gPROMS\u0027 , including the flash methods, which are listed below for convenience. This topic is concerned with the organisation of result vectors of the methods. The results vector ...",t:"Equilibrium flash methods in Multiflash"},"13":{i:0.00664851492830528,u:"../Content/Topics/x1323.html",a:"Result vector for binary diffusion coefficients Multiflash offers two method for binary diffusion coefficients: vapour and liquid. ",t:"Result vector for binary diffusion coefficients"},"14":{i:0.00664851492830528,u:"../Content/Topics/x1358.html",a:"The Multiash chemical equilibrium module in general allows performing simultaneous phase and chemical equilibrium calculations. gPROMS provides\n an interface to a single gas phase calculation at given temperature, pressure and input composition, ChemEquilibrium1P. The\n Multiflash ChemEquilibrium1P ...",t:"Chemical equilibrium calculation in Multiflash"},"15":{i:0.00664851492830528,u:"../Content/Topics/x1392.html",a:"The operation of the Multiflash interface can be controlled with a number of options:  mass Use mass basis for component inputs and outputs. noderiv Disable the use and calculation of analytical derivatives. noexptransform Disable the \u0027exponential transform\u0027 applied to inputs. The exponential ...",t:"Controlling the operation of Multiflash calculations"},"16":{i:0.0273682285867197,u:"../Content/Topics/x1417.html",a:"The Multiflash input file is a text file containing the specification of the thermodynamic models, data sources for pure components, binary\n interaction parameters and components that occur in the mixture of interest 1 Although Multiflash input files may also contain the mixture conditions (e.g. ...",t:"Constructing a Multiflash input file"},"17":{i:0.0317923871988359,u:"../Content/Topics/x1434.html",a:"The Multiflash input file can be created quite easily using Multiflash for Windows. The following procedure is all that is required to\n generate a working Multiflash input file and include it in a gPROMS project. Launch Multiflash for Windows by left clicking on the Start Menu and selecting Programs ...",t:"Creating the Multiflash input file using the graphical interface"},"18":{i:0.0182802873881168,u:"../Content/Topics/x1538.html",a:"In this section, we describe how to construct a Multiflash input file by hand, using a text editor. It may be helpful to note that a number\n of sample problem input files covering typical problem types are supplied with the Multiflash manual. It may be best to use one of these as the\n starting point ...",t:"Creating the Multiflash input file by hand"},"19":{i:0.00664851492830528,u:"../Content/Topics/x1542.html",a:"Source of Pure Component Data The data source (databank) for pure components is set using the command Puredata followed by the databank name: PUREDATA    databank_name ; where the databank name can be either Dippr (from AIChE) or the standard Infochem fluids databank Infodata.",t:"Source of Pure Component Data"},"20":{i:0.00664851492830528,u:"../Content/Topics/x1548.html",a:"Components are added to the mixture using the command Components followed by a list of components\u0027 names. If a particular component\u0027s name\n includes punctuation or spaces, then it should be enclosed in double quotation marks. Each name must be a valid component name for the databank\n considered. A ...",t:"Components In a Mixture"},"21":{i:0.00664851492830528,u:"../Content/Topics/x1552.html",a:"Binary Interaction Parameters (BIPs) are required by most of the mixture models in Multiflash for use by the thermodynamic and/or transport\n properties models for mixtures. BIP data may be taken from a databank or entered directly on the command line. The command has the following\n form: BIPDATA    ...",t:"Source of Binary Interaction Parameters Data"},"22":{i:0.0122997990574779,u:"../Content/Topics/x1558.html",a:"The thermodynamic and transport property models to be used are specified through the Model command which has the following general\n syntax: MODEL    model_id MF_model_name Model_options ; where: model_id is a user-defined name that will be used to refer to the particular combination of the property ...",t:"Model Definition"},"23":{i:0.00664851492830528,u:"../Content/Topics/x1588.html",a:"A phase descriptor is a user defined name that it is used to refer to a phase. It is necessary to define a phase descriptor for every phase\n that Multiflash is to consider when performing a calculation. The general format of the Pd command used for defining a phase descriptor is as follows: PD    ...",t:"Phase Descriptors"},"24":{i:0.0122997990574779,u:"../Content/Topics/x1621.html",a:"The complete Multiflash input file for the example considered here will have the following form: PUREDATA DIPPR \nCOMPONENTS methylacetate methanol water toluene ;\nBIPDATA oilandgas ;\nMODEL model1 RKS ;\nMODEL model2 UNIFAC VLE model1 ;\nPD PDLiquid LIQUID model2 model1 model1 ;\nPD PDVapour VAPOUR ...",t:"The complete Multiflash input file"},"25":{i:0.00664851492830528,u:"../Content/Topics/x1625.html",a:"A Multiflash input file, of the kind described in:  Constructing a Multiflash input\n file , specifies the information that is necessary for the computation of the thermophysical and transport properties of a particular type of\n material. However, many processes involve more than one type of ...",t:"Using Multiflash stream types"},"26":{i:0.00664851492830528,u:"../Content/Topics/x1637.html",a:"A stream may be introduced to a Multiflash input file using the Streamtype command (often abbreviated to ST). An extended version of the\n         earlier input file  is shown below: PUREDATA DIPPR \nCOMPONENTS methylacetate methanol water toluene ;\nBIPDATA oilandgas ;\nMODEL model1 RKS ;\nMODEL model2 ...",t:"Defining stream types in the Multiflash input file"},"27":{i:0.00664851492830528,u:"../Content/Topics/x1644.html",a:"Consider, for example, a gPROMS model of a plant which includes a water-cooled condenser .The latter makes use of two physical property\n Foreign Objects - one (called ProcessPPP) to compute the properties of the process stream being condensed and a second one (called CoolantPPP) to\n provide the ...",t:"Referring to stream types in gPROMS entities"},"28":{i:0.00808037815947216,u:"../Content/Topics/gSAFT introduction.htm",a:"PSE’s SAFT technology is a general and efficient implementation of the SAFT-VR SW and SAFT-γ Mie equation of states and is available as the gSAFT Physical Properties Package. For more background, please refer to the  PSE gSAFT web site  and the publications below: SAFT-γ Mie Lafitte T, Apostolakou ...",t:"The gSAFT physical properties interface"},"29":{i:0.00836561023805434,u:"../Content/Topics/gSAFT configuration.htm",a:"The configuration of the gSAFT FO requires the specification of the equation of state to be used and the components in the system. The gSAFT FO provides the implementation of two equations of state, namely the SAFT-VR SW and SAFT-γ Mie EOS. The EOS is selected by specifying the corresponding ...",t:"gSAFT Configuration"},"30":{i:0.0123722847908907,u:"../Content/Topics/gSAFT Gamma Mie group list.htm",a:"  We have seen that a component can be defined in terms of functional groups when the SAFT-g Mie EOS is used. The list of currently available groups are shown below. The user is free to define a component in terms of any combination of the following groups. The associating groups, together with the ...",t:"SAFT-γ Mie group list"},"31":{i:0.00664851492830528,u:"../Content/Topics/gSAFT Gamma Mie component list.htm",a:"SAFT-γ Mie component list The SAFT-γ Mie databank contains some predefined components which can be invoked without having to specify their group decomposition. These components are listed in the table below.  ",t:"SAFT-γ Mie component list"},"32":{i:0.00881686957893368,u:"../Content/Topics/gSAFT VR SW component list.htm",a:"SAFT-VR SW component list The SAFT-VR SW databank contains the following list of components: The associating components, together with the association scheme used in each case (site types and number of association sites for each type), are summarised in the table below:",t:"SAFT-VR SW component list"},"33":{i:0.00664851492830528,u:"../Content/Topics/gSAFT Unsupported methods.htm",a:"Unsupported methods The following table list the methods from the gPROMS Physical Property Interface that are not supported by the gSAFT foreign object.  ",t:"Unsupported methods"},"34":{i:0.00664851492830528,u:"../Content/Topics/gSAFT Available methods beyond the standard API.htm",a:"Available methods beyond the standard gPROMS Physical Property Interface The following table gives the list of methods that the gSAFT foreign object supports beyond the standard interface.  ",t:"Available methods beyond the standard gPROMS Physical Property Interface"},"35":{i:0.00664851492830528,u:"../Content/Topics/gSAFT Databank Management.htm",a:"Using a custom databank The distributed databanks (VR_SW_databank.dtb and GC_Mie_databank.dtb) are provided in encrypted form, and their contents can neither be viewed nor modified. A separately licensed feature for databank management allows users to use the gSAFT foreign object with non-encrypted ...",t:"gSAFT Databank Management"},"36":{i:0.0775895793270932,u:"../Content/Topics/gSAFT Custom Databank VR SW.htm",a:"In the case of a databank that corresponds to the SAFT-VR SW EoS, the \u003cgsaft\u003e element is required to have a single \u003ccompounds\u003e element as a child element.\n\t\t\t   The \u003ccompounds\u003e element is only allowed to contain a single or multiple \u003ccompound\u003e elements, with each element containing the parameters ...",t:"Creating a custom databank for SAFT-VR SW"},"37":{i:0.0775895793270932,u:"../Content/Topics/gSAFT Custom Databank GC Mie.htm",a:"Creating a custom databank for SAFT-g Mie\n         In the case of a databank that corresponds to the SAFT-g Mie EoS, the \u003cgsaft\u003e element is required to have a single \u003ccompounds\u003e element\n\t\t\t   as well as a single \u003cgroups\u003e element as children element.\n\t\t\t   The \u003ccompounds\u003e element is only allowed to ...",t:"Creating a custom databank for SAFT-g Mie\n        "},"38":{i:0.0102039301402623,u:"../Content/Topics/Using gSAFT with multiple databanks.htm",a:"The gSAFT FO can be configured to use multiple parameter databanks.\n\t        In this case, the databank names are provided in the gSAFT initialization string separated by a colon (\":\"), as shown below: gSAFT::databank_1.dtb:databank_2.dtb:databank_3.dtb\u003ccomponent_1,component_2,...,component_N\u003e\n An ...",t:"Using gSAFT with multiple databanks"},"39":{i:0.00664851492830528,u:"../Content/Topics/gSAFT example.htm",a:"gSAFT is distributed with an example for a highly non-ideal mixture consisting of HF and water. The figure below depicts a T-X-Y plot at a given pressure where measurements (circles) are compared against predictions (solid lines). HF-water mixture: comparison of SAFT-VR SW prediction and ...",t:"gSAFT example"},"40":{i:0.00808037815947216,u:"../Content/Topics/x1680.html",a:"gPROMS comes as standard (on Microsoft Windows) with the COThermoFO Foreign Object which allows gPROMS models to make use of\n external thermodynamic and physical properties software that comply with version 1.0 of the CAPE-OPEN Thermodynamic and Physical Properties\n specification (see ...",t:"The CAPE-OPEN physical property interface (COThermoFO)"},"41":{i:0.00664851492830528,u:"../Content/Topics/x1684.html",a:"The CAPE-OPEN standard for thermodynamic and physical properties 1 Full details are given in the document \"CAPE-OPEN Open Interface Specification: Thermodynamic and Physical Properties Version 1.0\"\n available at http://www.colan.org/index-33.html.  is based on the concept of a Property Package. This ...",t:"Introduction to property packages and systems"},"42":{i:0.00664851492830528,u:"../Content/Topics/x1703.html",a:"Once a CAPE-OPEN properties package/system has been installed, it can be used via the standard gPROMS mechanisms for physical properties\n packages. Thus, the user will typically: Introduce a Foreign Object for thermophysical property calculations in each MODEL entity that needs such calculations, ...",t:"Using COThermoFO in a gPROMS model"},"43":{i:0.00806133596059845,u:"../Content/Topics/x1728.html",a:"A list of the available property packages/systems can be obtained by specifying an empty initialisation string to COThermoFO. e.g. SET\n F.PhysProps := \"COThermoFO::\" ; When the resulting model is simulated it will fail, but the execution output will contain a list of all the available property\n ...",t:"Obtaining a list of available property packages/systems"},"44":{i:0.0135007088016762,u:"../Content/Topics/x1738.html",a:"The behaviour of COThermoFO is controlled by a number of optional flags that may be specified in the initialisation string after the property\n package/system identifier. e.g. SET\n F.PhysProps := \"COThermoFO::ThermoCo.PropSys.1\u003cAroPack\u003e -mass -debug\" ; The available options are: -mass the default ...",t:"Optional flags to COThermoFO"},"45":{i:0.00664851492830528,u:"../Content/Topics/x1789.html",a:"The default behaviour of the COThermoFO COMPONENTS() method is to return the list of component id\u0027s supplied by the property package. This can\n prove inconvenient in 2 cases: a given component id is rather unwieldy to use as an ORDERED_SET value in a gPROMS model, e.g.\n ...",t:"Overriding the values returned by the COMPONENTS() method"},"46":{i:0.00806133596059845,u:"../Content/Topics/x1807.html",a:"The full lists of methods/properties supported by COThermoFO are given in the tables below 1 The numbered references in the table titles refer to the corresponding table in the document \"CAPE-OPEN Open Interface Specification:\n Thermodynamic and Physical Properties Version 1.0\" available at ...",t:"List of supported methods/properties"},"47":{i:0.0443094313388894,u:"../Content/Topics/x2745.html",a:"To help users and PSE support staff diagnose interoperability issues between COThermoFO and CAPE-OPEN compliant\n property packages/systems the Windows version of gPROMS comes with a command-line utility called\n      COThermoFOTestTool.exe. This utility uses the COThermoFO to perform a set of ...",t:"The COThermoFO Test Tool"},"48":{i:0.0109060202240585,u:"../Content/Topics/c2796.html",a:"The state of the simple materials considered in the previous chapter on  using physical\n properties for simple materials  can be described in terms of their thermodynamic phase and their temperature, pressure, and molecular composition\n (e.g. a vector of molar fractions). This chapter is concerned ...",t:"Using Physical Properties for Complex Materials"},"49":{i:0.00896606511015346,u:"../Content/Topics/x2814.html",a:"General concepts for electrolyte system modelling A description of the general concepts that underpin the gPROMS electrolytic physical properties interface is given here.",t:"General concepts for electrolyte system modelling"},"50":{i:0.00664851492830528,u:"../Content/Topics/x2817.html",a:"An electrolytic material may involve several different classes of species, including: molecular species (e.g. , , ) ionic species (e.g. , , , ) solid components (e.g. , ) hydrates (e.g. ) In general, the above species may occur in a number of thermodynamic phases. The electrolytic physical property ...",t:"Species and phases"},"51":{i:0.00853227630469617,u:"../Content/Topics/x2938.html",a:"The vapour-liquid equilibrium (VLE) relationships pertain to species that exist in both liquid and vapour phases. For the sodium chloride\n example considered earlier, the following VLE equilibria may be established: The VLE equations are given by: where  is the vapour-liquid equilibrium constant for ...",t:"Vapour-liquid equilibrium"},"52":{i:0.00853227630469617,u:"../Content/Topics/x2996.html",a:"Liquid-phase reactions may take place among the molecular and ionic species in the liquid phase. For example, the following reactions may be\n considered for the sodium chloride system introduced earlier: The equilibria corresponding to the above reactions are generally described by equations of the ...",t:"Liquid-phase reactions"},"53":{i:0.00853227630469617,u:"../Content/Topics/x3047.html",a:"Each solid species in the system is assumed to undergo dissociation to form species in the liquid phase. For the sodium chloride example, the\n solid dissociation reactions are: The equilibria of solid dissociation reactions are generally described by equations of the form: where  is the equilibrium ...",t:"Liquid-solid equilibrium"},"54":{i:0.00664851492830528,u:"../Content/Topics/x3108.html",a:"The equations presented on  Vapour-liquid equilibrium ,  Liquid-phase reactions  and  Liquid-solid equilibrium  have been expressed in terms of the vapour fugacties and liquid-phase activities,  and  respectively. Alternative quantities, such as the vapour-phase fugacity coefficients and the ...",t:"Fugacity and activity coefficients"},"55":{i:0.0337619039049241,u:"../Content/Topics/x3166.html",a:"The gPROMS Electrolytic Physical Properties interface specifies that all electrolytic physical property packages interfaced to gPROMS need to\n provide the Thermophysical property methods and their arguments listed in the first table below. The form of the methods described here has been chosen so as ...",t:"Electrolytic physical property methods"},"56":{i:0.00896606511015346,u:"../Content/Topics/x4193.html",a:"OLI is a physical property package for aqueous and mixed solvent (MSE) electrolytic systems developed and marketed by OLI Systems, Inc. 1 http://www.olisystems.com. The interface to gPROMS supports both types of systems. To use OLI with gPROMS, you need to go through the following steps: Check ...",t:"The OLI physical property interface"},"57":{i:0.00947415699289161,u:"../Content/Topics/x4221.html",a:"At the start of the gPROMS simulation run, the interface will automatically initialise the chemistry model that you have specified (see above).\n If this initialisation is successful, an Electrolytic System Report (ESR) file will be produced in the Results folder of the\n Case. The ESR file will be ...",t:"Electrolyte system report file"},"58":{i:0.00664851492830528,u:"../Content/Topics/x4231.html",a:"In general, errors occur in two phases of the simulation in gPROMS: initialisation and calculations. The initialisation of an OLI Foreign Object consists of loading the chemistry model file (.dbs file) and checking all the Foreign Object\n methods used in your gPROMS Models. At the end of a ...",t:"Error handling in the OLI interface"},"59":{i:0.00836561023805434,u:"../Content/Topics/gSAFT components gamma Mie.htm",a:"SAFT-γ Mie component list The SAFT-γ Mie databank contains some predefined components, which can be invoked without having to specify their group decomposition. These components are listed in the table below:  ",t:"SAFT-γ Mie component list"},"60":{i:0.00836561023805434,u:"../Content/Topics/gSAFT components VR SW.htm",a:"SAFT-VR SW component list The SAFT-VR SW databank contains the following list of components: The associating components, together with the association scheme used in each case (site types and number of association sites for each type), are summarised in the table below:",t:"SAFT-VR SW component list"},"61":{i:0.00836561023805434,u:"../Content/Topics/gSAFT methods.htm",a:"Supported methods The following table list the methods from the gPROMS Physical Property Interface that are supported by the gSAFT foreign object. The following table gives the list of methods that the gSAFT foreign object supports beyond the standard interface.",t:"Supported methods"},});