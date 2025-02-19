import { css } from '@emotion/css';
import { Tab as ReactTab, TabList, TabPanel, Tabs } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const tabList = css`
  margin: 0;
  padding: 0;
`;

const tabCss = css`
  color: var(--unselected-color);
  background-color: var(--unselected-background-color);
  border-radius: 5px 5px 0 0;

  display: inline-block;
  border-bottom: 1px solid var(--selected-color);
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;

  :focus,
  :focus-visible {
    outline: none;
  }

  :focus:after,
  :focus-visible:after {
    content: '';
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
  }
`;

const selectedTab = css`
  color: var(--selected-color) !important;
  background-color: var(--selected-background-color) !important;
  border: 1px solid var(--selected-color) !important;
  border-bottom: 0px !important;
  bottom: -1px;
`;

const disabledTab = css`
  color: var(--disabled-color) !important;
  background-color: var(--disabled-background-color) !important;
  //border-color: var(--disabled-background-color) !important;
  cursor: default;
`;

const tabPanel = css`
  display: none;
`;

const selectedTabPanel = css`
  display: block;
  color: var(--color);
  background-color: var(--background-color);
`;

type TabProps = {
  tabs: {
    header: JSX.Element;
    content: JSX.Element;
    disabled?: boolean;
  }[];
  style?: {
    tabColor: string;
    tabBackgroundColor: string;
    disabledTabColor: string;
    disabledTagBackgroundColor: string;
    selectedTabColor: string;
    selectedTabBackgroundColor: string;

    panelColor: string;
    panelBackgroundColor: string;
    disabledPanelColor: string;
    disabledPanelBackgroundColor: string;

    width?: string;
    height?: string;
  };
};

const defaultStyle = {
  tabColor: 'black',
  tabBackgroundColor: 'white',
  disabledTabColor: 'gray',
  disabledTabBackgroundColor: 'rgba(128, 128, 128, 0.2)',
  selectedTabColor: 'black',
  selectedTabBackgroundColor: 'white',
  panelColor: 'black',
  panelBackgroundColor: 'white',
  disabledPanelColor: 'gray',
  disabledPanelBackgroundColor: 'rgba(128, 128, 128, 0.2)',
  width: 'inherit',
  height: 'inherit',
};

//TODO jump to first enabled? or keep panel disabled??
//TODO what to show when none is enabled if jump to first enabled?? validate at least one enabled??
function Tab({ tabs, style }: TabProps): JSX.Element {
  const appliedStyle = { ...defaultStyle, ...style };
  return (
    <Tabs style={{ width: appliedStyle.width, height: appliedStyle.height }} forceRenderTabPanel={true}>
      <TabList
        className={tabList}
        style={{
          ['--selected-color' as never]: appliedStyle.selectedTabColor,
        }}
      >
        {tabs.map((tab, index) => (
          <ReactTab
            key={index}
            className={tabCss}
            selectedClassName={selectedTab}
            disabledClassName={disabledTab}
            disabled={tab.disabled}
            style={{
              ['--unselected-color' as never]: appliedStyle.tabColor,
              ['--unselected-background-color' as never]: appliedStyle.tabBackgroundColor,
              ['--selected-color' as never]: appliedStyle.selectedTabColor,
              ['--selected-background-color' as never]: appliedStyle.selectedTabBackgroundColor,
              ['--disabled-color' as never]: appliedStyle.disabledTabColor,
              ['--disabled-background-color' as never]: appliedStyle.disabledTabBackgroundColor,
            }}
          >
            {tab.header}
          </ReactTab>
        ))}
      </TabList>

      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          className={tabPanel}
          selectedClassName={selectedTabPanel}
          disabled={tab.disabled}
          style={{
            ['--color' as never]: tab.disabled ? appliedStyle.disabledPanelColor : appliedStyle.panelColor,
            ['--background-color' as never]: tab.disabled
              ? appliedStyle.disabledPanelBackgroundColor
              : appliedStyle.panelBackgroundColor,
          }}
          forceRender={true}
        >
          {tab.content}
        </TabPanel>
      ))}
    </Tabs>
  );
}

export { Tab, TabProps };
