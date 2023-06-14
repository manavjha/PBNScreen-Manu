Practice by Numbers - Progamming Challenge

PLEASE SAVE AND/OR FORK THE PROJECT TO MAKE SURE YOUR WORK PERSISTS.

---

You will find an image (Example.png) of our current home page in src/assets.

All of the data and ID mappings have been provided to recreate this home page and all of its implied functionality.

Please build as much of the page shown in the Example.png file as possible in the allotted 24 hour testing period.

When you have completed the task and saved your work, please provide us with your sandbox url that can be found by clicking share > copy link in the top right hand corner of the page.

---

REQUIREMENTS:

The home page consists of three main sections: A hero panel, an activity section, and a data table.

-- The hero panel includes a welcome banner, a general information section, three quick nav links, and a hero image:

    - The href attribute for each link can be left blank and the information section can be hardcoded.

-- The activity section contains two lists and three sets of filter controls:

    - The action needed and notifications data can be found in the data/actions.json and data/notifications.json files respectively

    - Helper functions and ID maps for rendering the colorful name avatar, category tag, and action/notification description can be found in utility.js and constants.js

    - The filter activity controls on the left allow the user to simultaneously filter both lists based on the event_type attribute of each item

    - The notifications controls (pending, ignored, completed, all) allow the user to filter only the actions needed list by the status attribute of each item

    - The notifications controls (unread, all) allow the user to filter only the notifications list by the status attribute of each item

    - The checkmark and X buttons on the action needed items allow users to change the item status (this change does not need to persist through page reload)

    Extra Credit:

    - Lazy load the action needed and notifications items on scroll in batches of 20 records with an initial page load of 20 records effectively creating infinite scroll

-- The data table displays a list of payments made during the month of Novermber in 2017

    - The raw data and ID mappings can be found in data/table.json

    - The data should be grouped by date and paytype_id, and the amount should be summed for all similar objects. This should result in a total amount for each different paytype_id for each day.

    - The data transform should then be turned into a function that allows the user to run this same roll up logic for either the paytype_id, employee_type_id, or provider_id attribute. This should result in a total amount for the selected ID attribute for each distinct day.

    - The resulting data should be displayed in the table and the table controls should allow the user to pivot the data around the selected ID attrribute

    - Group by paytype_id Example:

      Sample data from data/table.json:

      {
        "paytype_id": 4,
        "amount": 1500.5,
        "date": "2017-11-01",
        "provider_id": "AA",
        "employee_type_id": 1
      },
      {
        "paytype_id": 4,
        "amount": 74,
        "date": "2017-11-01",
        "provider_id": "AB",
        "employee_type_id": 2
      }

      Resulting row in data table:

      {
        "paytype_id": 4,
        "amount": 1574.5,
        "date": "2017-11-01",
      }
