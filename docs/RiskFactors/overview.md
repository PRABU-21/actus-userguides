---
sidebar_position: 1
---

# Risk Factor and ACTUS Simulation Script

In this document we describe a script sequence of commands which:  
- Defines and stores some sample risk factors, and risk scenarios In the (mongodb ) risk factor store installed as part of ACTUS Basic Quickstart  
- define some sample ACTUS contracts  
- run  ACTUS simulations using the sample contracts and the predefined  saved risk factors  

The simulation requests return cashflows as JSON text strings. Running these strings through a JSON pretty printer or reformatting them in some other way as a csv ( comma separated variable file)  will make them more readable as a table of cashflow events