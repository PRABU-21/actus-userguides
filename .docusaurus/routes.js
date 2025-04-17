import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '238'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c9f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0cd'),
            routes: [
              {
                path: '/docs/actus-demo/demo-user-guide',
                component: ComponentCreator('/docs/actus-demo/demo-user-guide', '63a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/actus-demo/server-curl-samples',
                component: ComponentCreator('/docs/actus-demo/server-curl-samples', 'dd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/actus-demo',
                component: ComponentCreator('/docs/category/actus-demo', '1af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/dadfir3-demo',
                component: ComponentCreator('/docs/category/dadfir3-demo', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction-to-actus',
                component: ComponentCreator('/docs/category/introduction-to-actus', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/risk-factors',
                component: ComponentCreator('/docs/category/risk-factors', 'ed3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/competition',
                component: ComponentCreator('/docs/competition', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/About',
                component: ComponentCreator('/docs/dadfir3-demo/About', '3d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/ACTUS Rshiny Demo Guide',
                component: ComponentCreator('/docs/dadfir3-demo/ACTUS Rshiny Demo Guide', '64a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dadfir3-demo/Demo User Guide',
                component: ComponentCreator('/docs/dadfir3-demo/Demo User Guide', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Benefits of ACTUS',
                component: ComponentCreator('/docs/Introduction/Benefits of ACTUS', 'ffe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/core_activities',
                component: ComponentCreator('/docs/Introduction/core_activities', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Model-for-analytics',
                component: ComponentCreator('/docs/Introduction/Model-for-analytics', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Overview',
                component: ComponentCreator('/docs/Introduction/Overview', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Understanding-Financial-Contracts-and-Systems',
                component: ComponentCreator('/docs/Introduction/Understanding-Financial-Contracts-and-Systems', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/license',
                component: ComponentCreator('/docs/license', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/overview/',
                component: ComponentCreator('/docs/RiskFactors/overview/', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk Modelling for contract.md/activating_behaviour_model',
                component: ComponentCreator('/docs/RiskFactors/Risk Modelling for contract.md/activating_behaviour_model', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk Modelling for contract.md/Distinguishing',
                component: ComponentCreator('/docs/RiskFactors/Risk Modelling for contract.md/Distinguishing', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk Modelling for contract.md/Example_of_contract',
                component: ComponentCreator('/docs/RiskFactors/Risk Modelling for contract.md/Example_of_contract', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk Modelling for contract.md/Output',
                component: ComponentCreator('/docs/RiskFactors/Risk Modelling for contract.md/Output', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Risk Modelling for contract.md/sample_2d_payement_model',
                component: ComponentCreator('/docs/RiskFactors/Risk Modelling for contract.md/sample_2d_payement_model', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Simulating an ACTUS contract/output_cashflow_event_series',
                component: ComponentCreator('/docs/RiskFactors/Simulating an ACTUS contract/output_cashflow_event_series', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Simulating an ACTUS contract/simple_ACTUS_contract',
                component: ComponentCreator('/docs/RiskFactors/Simulating an ACTUS contract/simple_ACTUS_contract', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Simulating an ACTUS contract/with_risk',
                component: ComponentCreator('/docs/RiskFactors/Simulating an ACTUS contract/with_risk', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Using mongodb ACTUS risk database/Initialize_and_view_your_persistent_risk_factor_store_in_MongoDB',
                component: ComponentCreator('/docs/RiskFactors/Using mongodb ACTUS risk database/Initialize_and_view_your_persistent_risk_factor_store_in_MongoDB', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RiskFactors/Using mongodb ACTUS risk database/Inserting_Sample_Risk_Data_–_Reference_Indexes',
                component: ComponentCreator('/docs/RiskFactors/Using mongodb ACTUS risk database/Inserting_Sample_Risk_Data_–_Reference_Indexes', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
