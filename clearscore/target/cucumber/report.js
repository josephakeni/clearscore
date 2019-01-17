$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("module1/HomePage_Cookies_Actions.feature");
formatter.feature({
  "line": 1,
  "name": "Check and interract with cookie notification on ClearScore website",
  "description": "",
  "id": "check-and-interract-with-cookie-notification-on-clearscore-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a user, I want to be able verify and interract with the cookies notification",
  "description": "",
  "id": "check-and-interract-with-cookie-notification-on-clearscore-website;as-a-user,-i-want-to-be-able-verify-and-interract-with-the-cookies-notification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@clearscore_cookies"
    },
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify the cookies notification is present",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the /No Problem/ button on the cookies notification bar in order to dismiss the notification",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify that the cookie notification bar doesnt reappear",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I know that the appropriate cookies are set",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_Cookies_Actions.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 450305844,
  "error_message": "java.lang.NullPointerException\r\n\tat com.jotonia.step.definitions.HomePage_Cookies_Actions.\u003cinit\u003e(HomePage_Cookies_Actions.java:20)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n\tat ✽.Given I am on the homepage(module1/HomePage_Cookies_Actions.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage_Cookies_Actions.i_verify_the_cookies_notification_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_Cookies_Actions.i_click_the_No_Problem_button_on_the_cookies_notification_bar_in_order_to_dismiss_the_notification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_Cookies_Actions.i_verify_that_the_cookie_notification_bar_doesnt_reappear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage_Cookies_Actions.i_know_that_the_appropriate_cookies_are_set()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("module1/SavingsCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "ClearScore savings calculator",
  "description": "",
  "id": "clearscore-savings-calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a user, I want to be able to set scores and goal on the ClearScore savings calculator",
  "description": "",
  "id": "clearscore-savings-calculator;as-a-user,-i-want-to-be-able-to-set-scores-and-goal-on-the-clearscore-savings-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@savings_calculator"
    },
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click the savings calculator tab.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see the savings calculator is displayed and I select 50 for my current score",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I also select my score goal of 680",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify that my current score interest rate, costs and cards available are: 36.5%, £849 and 22",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify that my goal interest rate, costs and cards available are: 25%, £520 and 241",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "my potential savings display should be £384",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_Cookies_Actions.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 12870759,
  "error_message": "java.lang.NullPointerException\r\n\tat com.jotonia.step.definitions.HomePage_Cookies_Actions.\u003cinit\u003e(HomePage_Cookies_Actions.java:20)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n\tat ✽.Given I am on the homepage(module1/SavingsCalculator.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SavingsCalculator_Actions.i_click_the_savings_calculator_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 55
    }
  ],
  "location": "SavingsCalculator_Actions.i_see_the_savings_calculator_is_displayed_and_I_select_for_my_current_score(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "680",
      "offset": 31
    }
  ],
  "location": "SavingsCalculator_Actions.i_also_select_my_score_goal_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 77
    },
    {
      "val": "5",
      "offset": 80
    },
    {
      "val": "849",
      "offset": 85
    },
    {
      "val": "22",
      "offset": 93
    }
  ],
  "location": "SavingsCalculator_Actions.i_verify_that_my_current_score_interest_rate_costs_and_cards_available_are_£_and(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 68
    },
    {
      "val": "520",
      "offset": 74
    },
    {
      "val": "241",
      "offset": 82
    }
  ],
  "location": "SavingsCalculator_Actions.i_verify_that_my_goal_interest_rate_costs_and_cards_available_are_£_and(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "384",
      "offset": 40
    }
  ],
  "location": "SavingsCalculator_Actions.my_potential_savings_display_should_be_£(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("rest_api_module/bookISBN.feature");
formatter.feature({
  "line": 1,
  "name": "Get book by ISBN",
  "description": "",
  "id": "get-book-by-isbn",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User calls web service to get a book by its ISBN",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service-to-get-a-book-by-its-isbn",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@book1"
    },
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a book exists with an isbn of 9781451648546",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a user retrieves the book by isbn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "totalItems",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "kind",
        "books#volumes"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "response includes the following in any order",
  "rows": [
    {
      "cells": [
        "items.volumeInfo.title",
        "Steve Jobs"
      ],
      "line": 12
    },
    {
      "cells": [
        "items.volumeInfo.publisher",
        "Simon and Schuster"
      ],
      "line": 13
    },
    {
      "cells": [
        "items.volumeInfo.pageCount",
        "630"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9781451648546",
      "offset": 30
    }
  ],
  "location": "Book.a_book_exists_with_isbn(String)"
});
formatter.result({
  "duration": 712609,
  "status": "passed"
});
formatter.match({
  "location": "Book.a_user_retrieves_the_book_by_isbn()"
});
formatter.result({
  "duration": 443263567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "Book.verify_status_code(int)"
});
formatter.result({
  "duration": 898715,
  "status": "passed"
});
formatter.match({
  "location": "Book.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 44660732,
  "status": "passed"
});
formatter.match({
  "location": "Book.response_contains_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 34397857,
  "status": "passed"
});
});