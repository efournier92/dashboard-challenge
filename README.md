# Dashboard Challenge

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Design Philosophy](#design-philosophy)
  - [Development Approach](#development-approach)
  - [Technologies Utilized](#technologies-utilized)
  - [Sources](#sources)
- [Challenge Requirements](#challenge-requirements)
- [Project Details](#project-details)
  - [Dependencies](#dependencies)
  - [Setup](#setup)
    - [Prepare the Environment](#prepare-the-environment)
    - [Serve the Application](#serve-the-application)
- [Links](#links)
  - [Local](#local)
    - [Root](#root)
    - [Graphiql > Sandbox IDE](#graphiql--sandbox-ide)
- [Areas for Improvement](#areas-for-improvement)
  - [Line Chart](#line-chart)
  - [Icons](#icons)
  - [Typescript](#typescript)
  - [Pixel Perfection](#pixel-perfection)
  - [Mobile Support](#mobile-support)
- [Feature Stories](#feature-stories)

## Overview

- This application was built to demonstrate my competence with Rails, React, and component-based UI libraries.

## Design Philosophy

### Development Approach

- In order to give structure to the development process and demonstrate my business-oriented approach, I began by scoping out [Feature Stories](#feature-stories) in the section below.
  - The [Commit History](https://github.com/efournier92/dashboard-challenge/commits/master/) against this repo reflects my adherence to this discipline.

### Technologies Utilized

- Rails
- React
- Playbook Design System
- TypeScript
- GraphQL

### Sources

- The initial commit was sourced from the following example repository.
  - [Power Home Remodeling > Playbook > React Rails Example](https://github.com/powerhome/playbook/tree/master/examples/rails-react-example)
- This project heavily leverages UI components from the [Playbook Design System](https://playbook.powerapp.cloud/kits?type=react).

## Challenge Requirements

- Use _Playbook Design System_ to build the UI.
- The solution **should be built using Ruby on Rails**, which is already included.
  - You can mix in React, but make sure your foundation is Rails.
- The UI should contain mostly components that are already built and available in the Playbook Design System.
  - However, there are certain elements that are not yet available as Playbook kits.
  - The deliverable can be mainly the display or presentation of the UI design.
    - Any interactivity built for the dashboard will be considered bonus work.
- Mock out any data needed for the page using Rails conventions or seeds.
- SCSS syntax should be used for all styles.
- Ensure the page displays correctly in multiple browsers.
- Test for responsiveness (mobile).
- Match the mock up.
  - The layout should be **pixel-perfect** as a showcase of UI talent and attention to detail.
  - _Be sure the match the mock up 100%, before adding any extra flair._
- Add a click action to your UI.
  - Examples:
    - Display our dialog kit or a popover with any additional data you like.
- The deliverable should be functional.
  - Thoroughly test it for proper interactivity.
- Ensure there is at least one connection to an external API for data.
  - This could be names, avatars, a data source, or even the weather.

## Project Details

### Dependencies

1. [Install asdf version manager](https://asdf-vm.com/guide/getting-started.html) (Bash & Git instructions)
1. Run `asdf install` to install dependencies
1. Confirm you are running `ruby` version `3.3.0` by running `ruby -v`
1. Confirm you are running `bundler` version `2.3.14` by running `bundle -v`
1. Confirm you are running `yarn` version `1.22.15` by running `yarn -v`
1. Install gem dependencies `bundle`
1. Install yarn dependencies `yarn`

### Setup

#### Prepare the Environment

```bash
bundle
rails db:reset
```

#### Serve the Application

```bash
bin/rails s
yarn watch
```

## Links

### Local

#### Root

- http://localhost:3000/

#### Graphiql > Sandbox IDE

- http://localhost:3000/graphiql

## Areas for Improvement

### Line Chart

- The line-chart example given in the screenshot provided seems erroneous in a few different ways.
  - The top value on the y axis is `12/15`.
  - The right-most value on x axis goes back to `11/15`.
  - The line does not have a data point for mid-month dates.
    - _To me, this seems divergent from the default behavior of the component._

### Icons

- For some reason, not all the font-awesome icons I needed were available, and instead display with an `X` symbol.
  - _I believe the mock up called for some icons that are only available in the Pro version._

### Typescript

- I faced transpiler errors around leveraging TypeScript-specific functionality, which I did not expent bandwidth to resolve.
  - _It's worth noting that I'm a fan of TS, and would have rather used it, but it did not seem instrumental to this excercise, given the requirements neglect to mention it at all._

### Pixel Perfection

- It would be inaccurate to claim my layout matches the screenshot provided.
  - While I'm certain I could have gotten there, I needed to time box this exercise to some extent.
  - I feel the work I've done here is adequately indicative of my abilities, and proves I'm highly competent with both front-end and back-end technologies.

### Mobile Support

- As with pixel perfection, my time-boxing of this exercise precluded my creating a perfectly responsive layout.
  - Were I to cut back into it at some point, now with a better understanding of the Playbook system, I feel confident I could adjust it to be a fully responsive layout.

## Feature Stories

### [X] TK-000 > Back End > Initialize the Application

#### Story

- As a developer, I need to initialize a Rails application with React and Playbook tooling amiable on the front end, so I can start building Dashboard functionality.

#### Acceptance Criteria

- The application base has been cloned from the following repository location.
  - https://github.com/powerhome/playbook/tree/master/examples/rails-react-example
- The project has a GitHub repository.
  - The contents of the base are pushed there.
- The new application can be served via the `rails s` command.
- The README includes a list of feature stories for development.
  - _For lack of a proper ticketing system in scope of this assessment._
- Add [Bootstrap CSS](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to the process.
  - _Given a recognized need for a grid system, this being the industry standard, we should add it right away._

### [X] TK-001 > Front End > Create a _Top Bar_ Component

#### Story

- As a user, I want to see a _Top Bar_ component on the Dashboard page, so I can see application indicators.

#### Acceptance Criteria

- The top bar includes:
  - An application icon.
  - The company name: _PB&J INTERNATIONAL_.
  - An alert indicator with a bell icon and badge to count alerts.
  - An inbox indicator with an inbox badge to count messages.
  - A user icon with a user name, avatar, and drop-down arrow.

### [X] TK-002 > Front End > Create a _Navigation Bar_ Component

#### Story

- As a user, I want to see a navigation bar below the _Top Bar_, so I can select between different dashboard views.

#### Acceptance Criteria

- The component leverages the [Horizontal Nav](https://playbook.powerapp.cloud/kits/nav/react#horizontal-nav) component from the _Playbook Design System_.
- Navigation options include:
  - Dashboard.
  - Products.
  - In Progress.
  - Settings.
- The `Dashboard` option is selected by default.

### [X] TK-003 > Front End > Add a _Title_ to the Dashboard

#### Story

- As a user, I want to see a _Title_ component below the navigation bar, so I know what type of information I'm looking at.

#### Acceptance Criteria

- The main title reads _Commerce Dashboard_.
- A subtitle, above the main title, reads _DASHBOARD_.
  - This subtitle is left-hand justified.

### [X] TK-004 > Front End > Add a Device for displaying Key Performance Indicators

#### Story

- As a user, I want to see _Key Performance Indicators_ below the _Title_ section, so I can monitor these metrics.

#### Acceptance Criteria

- The device includes a top bar.
  - This includes a title, labeling the device as _Key Performance Indicators_.
    - The title is left-hand justified.
  - This includes a circular-icon button.
    - The button leverages the [Circle Icon Button](https://playbook.powerapp.cloud/kits/circle_icon_button/react) component from the _Playbook Design System_.
    - Inside the button is a `...` elipse icon.
- The device includes a side-navigation panel.
  - Built using the [No-Highlight Vertical Nav](https://playbook.powerapp.cloud/kits/nav/react#no-highlight) component from the _Playbook Design System_.
  - Navigation options include:
    - Revenue.
    - Orders.
    - Profit.
    - Average Check.
    - Canceled.
    - Repeat Sales.
  - Where applicable, the navigation options indicate percetange up or down.
    - Up is indicated with in green with an upward-facing arrow.
    - Down is indicated with in red with an downward-facing arrow.
  - In desktop, this rendered on the left-hand side of the line graph.
  - In mobile, this rendered on the above the line graph.
- The device includes a line graph.
  - Built using the [Line Graph](https://playbook.powerapp.cloud/kits/line_graph/react) component from the _Playbook Design System_.
  - The vertical axis indicates the value.
  - The horizonal axis indicates the date.
    - Every 15 days from 5/1 to 12/15.

### [X] TK-005 > Front End > Build a _Ticket Escalations_ Device

#### Story

- As a developer, I want to create a _Ticket Escalation_ component, so I can reuse it in the dashboard.

#### Acceptance Criteria

- This can built starting with the [Default List](https://playbook.powerapp.cloud/kits/list/react#default) component from the _Playbook Design System_.
- The new component allows the following properties to be passed in.
  - Title.
  - Color.
  - Count.
  - A list of escalations.
    - An array of objects, containing the following information.
      - Escalation type.
      - The reporting user's avatar.
      - The reporting user's initials.
- The escalation title should be displayed at the top of the device.
  - This should be left-hand justified.
- The escalation count should be displayed next to the title at the top of the device.
  - This should be right-hand justified.
- Each vertical row in the device should include the following.
  - A circular icon.
    - If the user's avatar is available, display that.
    - If the user's avatar is not available, display the user's initials.
- The device should display a maximum of 6 escalations.
  - If the count exceeds the maximum, a `Show More` button should be displayed at the bottom of the vertical nav.

### [X] TK-006 > Front End > Display a Series of _Ticket Escalation_ Devices on the Dashboard

#### Story

- As a user, I want to see _Ticket Escalation_ devices on the dashboard, so I can monitor those metrics.

#### Acceptance Criteria

- 5 _Ticket Escalation_ devices are displayed, with the following details.
  1. {title: "NEW", color: "Cyan", count: 25 }
  1. {title: "MANAGER FEEDBACK", color: "blue", count: 5 }
  1. {title: "PROCESSING", color: "yellow", count: 3 }
  1. {title: "AWAITING FEEDBACK", color: "red", count: 2 }
  1. {title: "APPROVED", color: "green", count: 15 }
- On Desktop, the devices should be displayed side by side.
- On Mobile, the devices should be displayed stacked vertically.

### [X] TK-007 > Front End > Build a _Percentage Chart_ Component

#### Story

- As a developer, I want to create a _Pipeline Chart_, so we can add this to our library of data-visualization components in the _Playbook Design System_.

#### Acceptance Criteria

- The component accepts the following props:
  - Title.
  - Percentage.
  - Total Count
- The component renders the percentage as a horizontal bar, filled according to the percentage provided.
- The title is displayed to the left of the percentage bar.
- The total count is displayed all the way to the right of the component.

### [X] TK-008 > Front End > Add a _Pipeline Chart_ Device

#### Story

- As a user, I want to see a _Pipeline Chart_ device, sod I can monitor the corresponding metrics.

#### Acceptance Criteria

- This can built starting with the [Default List](https://playbook.powerapp.cloud/kits/list/react#default) component from the _Playbook Design System_.
- Each row in the device includes the following.
  - A title.
  - A Percentage Chart indicating the corresponding percentage.
  - A total count.
- The device is rendered below the _Ticket Escalations_ section.

### [X] TK-009 > Front End > Add a _Ticket Metric_ Component

#### Story

- As a developer, I want to create a _Ticket Metric_ component to the system, so I can use it within the _Ticket Metrics_ device.

#### Acceptance Criteria

- This can built starting with the [Default List](https://playbook.powerapp.cloud/kits/list/react#default) component from the _Playbook Design System_.
- Each row in the device includes the following.
  - A title.
  - A _Percentage Chart_ indicating the corresponding percentage.
  - A total count.
- The device is rendered below the _Ticket Escalations_ section.

### [X] TK-010 > Front End > Add a _Ticket Metrics_ Device

#### Story

- As a user, I want to see a _Ticket Metrics_ device on the dashboard, so I can monitor the corresponding metrics.

#### Acceptance Criteria

- The device includes the following 4 sections, each rendered using the _Ticket Metric_ component.
  - { title: "Tickets (YTD)", count: 1,426, icon: ticket, color: green }
  - { title: "Overdue (YTD)", count: 25, icon: cancel, color: red }
  - { title: "Closed Without Action (YTD)", count: 97, icon: checklist, color: blue }
  - { title: "Esculated (YTD)", count: 896, icon: alert, color: yellow }
- On Desktop, the device is rendered to the right of the _Pipeline Chart_ device.
- On Mobile, the device is rendered below the _Pipeline Chart_ device.

### [X] TK-011 > Back End > Integrate GraphQL on the Server Side

#### Story

- As a developer, I want to add GraphQL to the Rails back end, so I can use it to communicate data with the front end.

#### Acceptance Criteria

- GraphQL is installed and integrated with the server-side Rails application.
- GraphQL has been configured to serve the following data.
  - Users.
  - Ticket escalations.

### [ ] TK-012 > Back End > Serve Dashboard Data via Rails

#### Story

- As a developer, I want to serve all the dashboard data via Rails, so it behaves more like a real web application.

#### Acceptance Criteria

- The following data is seeded, served via API, and consumed by the React front-end application.
  - Users.
    - Total: 10.
    - Includes:
      - Name.
      - Gender.
  - Key Performance Indicators:
    - _Revenue_ metrics.
    - Percentage change for _Orders_.
    - Percentage change for _Average Check_.
    - Percentage change for _Canceled_.
  - Ticket Escalations:
    - _New_.
      - 25 total.
    - _Manager Feedback_.
      - 5 total.
    - _Processing_.
      - 3 total.
    - _Awaiting Feedback_.
      - 2 total.
    - _Approved_.
      - 15 total.
  - Pipeline Chart:
    - _Add to Cart_.
      - 100%.
      - 2,577 total.
    - _Shopping Cart_.
      - 79%.
      - 2,023 total.
    - _Payment Methods_.
      - 59%.
      - 1,567 total.
    - _Delivery Methods_.
      - 56%.
      - 1,252 total.
    - _Confirm_.
      - 49%.
      - 1,182 total.
    - _Delivery_.
      - 46%.
      - 1,098 total.
  - Ticket Metrics:
    - _Tickets_.
      - 1,426 total.
    - _Overdue_.
      - 25 total.
    - _Closed Without Action_.
      - 97 total.
    - _Escalated_.
      - 896 total.

### [X] TK-013 > Front End > Integrate Apollo Client with the React Front End

#### Story

- As a developer, I want to install the `Apollo Client` package, so I can consume it from the React front-end application.

#### Acceptance Criteria

- The following packages are available and integrated with React.
  - `@apollo/client`
  - `graphql`

### [X] TK-014 > Front End > Add a Click Action to Display a User-Details Popover

#### Story

- As a user, I want to see a popover when I click the down chevron next to my name, so I can review my user details.

#### Acceptance Criteria

- A popover is displayed upon clicking the down chevron to the right of the the user's name in the top nav bar.
- The popover includes the following user details.
  - Name.
  - Avatar.
  - Title.
- This can built using the [Vertical Default User](https://playbook.powerapp.cloud/kits/user/react#default) component from the _Playbook Design System_.

### [ ] TK-015 > Front End > Import Custom Icons

#### Story

- As a developer, I want to leverage custom-icon functionality from the _Playbook Design System_, so I can match the mockup without needing to pay for the Pro version.

#### Acceptance Criteria

- Custom icons has been imported using the following guide.
  - [Tips for Custom Icons](https://playbook.powerapp.cloud/kits/icon/react#Tips-for-Custom-Icons)
- SVG images has been located and hosted for each relevant icon.
- All icons indicated in the mockup screenshot render correctly on the dashboard.

### [X] TK-016 > Front End > Deprecate Bootstrap in Favor of Playbook Layouts

#### Story

- As a developer, I want to use exclusively layouts from the _Playbook Design System_, so I can deprecate Bootstrap from the client-side application.

#### Acceptance Criteria

- All usages of Bootstrap grid and flex libraries are replaced with equivalent functionality from the _Playbook Design System_.
- Bootstrap is no longer included on the client side.
