document.addEventListener('DOMContentLoaded', function() {
    var addPersonBtn = document.getElementById('addPersonBtn');
    var fillFormBtn = document.getElementById('fillFormBtn');

    addPersonBtn.addEventListener('click', function() {
        showAddPersonForm();
        document.querySelector('body').style.width = '500px';
    });

    fillFormBtn.addEventListener('click', function() {
        showSavedPersonsList();
        document.querySelector('body').style.width = '350px';

    });

    // Function to display the form for adding a new person
    function showAddPersonForm() {
        clearPopupContent();
        var form = createPersonForm();
        var saveButton = createSaveButton();

        saveButton.addEventListener('click', function() {
            var personData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                dayBirthdate: document.getElementById('dayBd').value,
                monthBirthdate: document.getElementById('monthBd').value,
                yearBirthdate: document.getElementById('yearBd').value,
                nationality: document.getElementById('nationality').value,
                country: document.getElementById('country').value,
                passportNumber: document.getElementById('passportNumber').value,
                dayPassportExpDate: document.getElementById('dayPassportExpDate').value,
                monthPassportExpDate: document.getElementById('monthPassportExpDate').value,
                yearPassportExpDate: document.getElementById('yearPassportExpDate').value,
                phoneNumber: document.getElementById('phoneNumber').value,
                countryCode: document.getElementById('countryCode').value
            };

            savePersonData(personData);
            clearPopupContent();
            showSavedPersonsList();
        });

        appendToPopup(form);
        appendToPopup(saveButton);
    }

    // Function to create the person data form
    function createPersonForm() {

        // Data for dropdown options
        const dayOptions = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
        const monthOptions = [
            'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
            'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ];

        const yearOptions = Array.from({ length: 101 }, (_, i) => String(1911 + i));
        const yearOptions2 = Array.from({ length: 101 }, (_, i) => String(2023 + i));

        const nationalityOptions = ['سعودي', 'إماراتي', 'بحريني', 'كويتي', 'دولة قطر', 'عماني', 'مصري', 'سنغافوري', 'سويدي', 'سوداني', 'جزر سليمان', 'فلبيني', 'روسي', 'صربي', 'روماني', 'برتغالي', 'بورتوريكو', 'بولندي', 'باكستاني', 'بيروفي', 'بابواني', 'بولينزي', 'سوري', 'نيوزيلاندي', 'نرويجي', 'هولندي', 'نيجيري', 'نيجري', 'كاليدوني', 'نامبي', 'موزنبيقي', 'ماليزي', 'مكسيكي', 'مالاوني', 'موريشيوسي', 'سلوفيني', 'تونسي', 'تشادي', 'يمني', 'التشيك', 'صومالي', 'غانا', 'جيبوتي', 'سريلانكي', 'بوروندي', 'أثيوبي', 'مالى', 'افغانستاني', 'إريترى', 'نيبالى', 'زيمبابوني', 'زامبي', 'جنوب أفريقي', 'واليس وفوتونا', 'تايلاندي', 'فانواتوني', 'فيتنامي', 'جزر العذراء الأمريكية', 'جزر العذراء البريطانية', 'فنزويلي', 'أوزبكي', 'أمريكي', 'أوغندي', 'أوكراني', 'تنزاني', 'تايواني', 'ترينيدادي', 'تركي', 'بورمي', 'موريتاني', 'مقدوني', 'أنغولاني', 'كونغي', 'إكوادوري', 'جزائري', 'دومينيكاني', 'دانماركي', 'ألماني', 'قبرصي', 'الرأس الأخضر', 'كوبي', 'كولومبي', 'صيني', 'كاميروني', 'شيلي', 'ساحل العاج', 'سويسري', 'إفريقي', 'إسباني', 'بوركيني', 'أرجنتيني', 'نمساوي', 'أسترالي', 'بوسني', 'بنغلادشي', 'بلجيكي', 'بلغاري', 'كونغي', 'بروناوي', 'بوليفي', 'برازيلي', 'باهامي', 'بوتسواني', 'كندي', 'كونغي', 'فنلندي', 'مدغشقري', 'إيطالي', 'يوغسلافي', 'مغربي', 'ليبي', 'ليبيري', 'سانت لوسيا', 'لبناني', 'كازاخستاني', 'كوري', 'نيفيسي', 'جزر القمر', 'كيني', 'ياباني', 'أردني', 'جامايكي', 'آيسلندي', 'فيجي', 'هونغ كونغي', 'فرنسي', 'غابوني', 'بريطاني', 'جرينلاندي', 'غيني', 'يوناني', 'هندوراسي', 'إيراني', 'كرواتي', 'إندونيسي', 'أيرلندي', 'فلسطيني', 'هندي', 'عراقي', 'مالديفي'];

        const countryOptions = ['المملكة العربية السعودية', 'الإمارات العربية المتحدة', 'البحرين', 'كويت', 'دولة قطر', 'عمان', 'مصر', 'سنغافورا', 'السويد', 'السودان', 'جزر سليمان', 'الفلبين', 'روسيا', 'صربيا', 'رومانيا', 'البرتغال', 'بورتوريكو', 'بولندا', 'باكستان', 'بيرو', 'بابوا غينيا الجديدة', 'بولينزيا الفرنسية', 'سوريا', 'نيوزيلاندا', 'النرويج', 'هولندا', 'نيجيريا', 'النيجر', 'كاليدونيا الجديدة', 'نامبيا', 'الموزنبيق', 'ماليزيا', 'المكسيك', 'مالاوي', 'موريشيوس', 'سلوفينيا', 'تونس', 'تشاد', 'اليمن', 'التشيك', 'صومال', 'غانا', 'جيبوتي', 'سريلانكا', 'جمهورية بوروندي', 'أثيوبيا', 'مالى', 'افغانستان', 'إريتريا', 'نيبال', 'زيمبابوي', 'زامبيا', 'جنوب أفريقيا', 'واليس وفوتونا', 'تايلاند', 'فانواتو', 'فيتنام', 'جزر العذراء الأمريكية', 'جزر العذراء البريطانية', 'فنزويلا', 'أوزباكستان', 'الولايات المتحدة الأمريكية', 'أوغندا', 'أوكرانيا', 'تنزانيا', 'تايوان', 'ترينيداد وتوباغو', 'تركيا', 'بورما', 'موريتانيا', 'مقدونيا', 'أنغولا', 'كونغو', 'إكوادور', 'الجزائر', 'جمهورية الدومينيكان', 'الدنمارك', 'ألمانيا', 'قبرص', 'الرأس الأخضر', 'كوبا', 'كولومبيا', 'الصين', 'كاميرون', 'تشيلي', 'ساحل العاج', 'سويسرا', 'جمهورية أفريقيا الوسطى', 'إسبانيا', 'بوركينا فاسو', 'الأرجنتين', 'النمسا', 'أستراليا', 'البوسنة والهوسك', 'بنغلاديش', 'بلجيكا', 'بلغاريا', 'جمهورية الكونغو الديمقراطية', 'بروناي', 'بوليفيا', 'البرازيل', 'باهاماس', 'بوتسوانا', 'كندا', 'كونغو', 'فنلندا', 'مدغشقر', 'إيطاليا', 'يوغسلافيا', 'المغرب', 'ليبيا', 'ليبيريا', 'سانت لوسيا', 'لبنان', 'كازاخستان', 'كوريا الجنوبية', 'نيفيس', 'جزر القمر', 'كينيا', 'اليابان', 'الأردن', 'جامايكا', 'آيسلندا', 'فيجي', 'هونغ كونغ', 'فرنسا', 'الغابون', 'بريطانيا', 'جرينلاند', 'غينيا', 'اليونان', 'هندوراس', 'إيران', 'كرواتيا', 'إندونيسيا', 'إيرلندا', 'فلسطين', 'الهند', 'العراق', 'جزر المالديف'];

        const countryCodeOptions = ['+973', '+965', '+974', '+968', '+20', '+65', '+46', '+249', '+677', '+63', '+7', '+381', '+40', '+351', '+1 939', '+48', '+92', '+51', '+675', '+689', '+963', '+64', '+47', '+31', '+234', '+227', '+687', '+264', '+258', '+60', '+52', '+265', '+230', '+386', '+216', '+235', '+967', '+420', '+252', '+233', '+253', '+94', '+257', '+251', '+223', '+93', '+977', '+977', '+263', '+260', '+27', '+681', '+66', '+678', '+84', '+58', '+998', '+256', '+380', '+255', '+886', '+1 868', '+90', '+95', '+222', '+389', '+244', '+242', '+593', '+213', '+45', '+49', '+537', '+238', '+53', '+57', '+86', '+237', '+56', '+225', '+41', '+34', '+226', '+54', '+43', '+61', '+387', '+880', '+32', '+359', '+673', '+591'];

        // Function to create a dropdown list with options
        function createDropdownList(options) {
            const select = document.createElement('select');
            for (let optionText of options) {
                const option = document.createElement('option');
                option.textContent = optionText;
                option.value = optionText;
                select.appendChild(option);
            }
            return select;
        }

        // Function to create an input row for the form
        function createInputRow(labelText, inputField) {
            const container = document.createElement('div');
            container.className = 'form-row';

            const label = document.createElement('label');
            label.textContent = labelText;

            container.appendChild(label);
            container.appendChild(inputField);

            return container;
        }

        // Function to create the form
        function createForm() {
            const form = document.createElement('form');

            const firstNameInput = document.createElement('input');
            firstNameInput.type = 'text';
            firstNameInput.placeholder = 'First Name';
            firstNameInput.id = 'firstName';

            const lastNameInput = document.createElement('input');
            lastNameInput.type = 'text';
            lastNameInput.placeholder = 'Last Name';
            lastNameInput.id = 'lastName';

            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.placeholder = 'Email';
            emailInput.id = 'email';

            const dayDropdown = createDropdownList(dayOptions);
            dayDropdown.id = 'dayBd';
            const monthDropdown = createDropdownList(monthOptions);
            monthDropdown.id = 'monthBd';
            const yearDropdown = createDropdownList(yearOptions);
            yearDropdown.id = 'yearBd';

            const nationalityDropdown = createDropdownList(nationalityOptions);
            nationalityDropdown.id = 'nationality';

            const countryDropdown = createDropdownList(countryOptions);
            countryDropdown.id = 'country';

            const passportNumberInput = document.createElement('input');
            passportNumberInput.type = 'text';
            passportNumberInput.placeholder = 'Passport Number';
            passportNumberInput.id = 'passportNumber';

            const passportDayDropdown = createDropdownList(dayOptions);
            passportDayDropdown.id = 'dayPassportExpDate';
            const passportMonthDropdown = createDropdownList(monthOptions);
            passportMonthDropdown.id = 'monthPassportExpDate';
            const passportYearDropdown = createDropdownList(yearOptions2);
            passportYearDropdown.id = 'yearPassportExpDate';

            const countryCodeDropdown = createDropdownList(countryCodeOptions);
            countryCodeDropdown.id = 'countryCode';

            const phoneNumberInput = document.createElement('input');
            phoneNumberInput.type = 'text';
            phoneNumberInput.placeholder = 'Phone Number';
            phoneNumberInput.id = 'phoneNumber';

            const inputRows = [
                createInputRow('First Name', firstNameInput),
                createInputRow('Last Name', lastNameInput),
                createInputRow('Email', emailInput),
                createInputRow('Birthdate', dayDropdown),
                createInputRow('', monthDropdown),
                createInputRow('', yearDropdown),
                createInputRow('Nationality', nationalityDropdown),
                createInputRow('Country', countryDropdown),
                createInputRow('Passport Number', passportNumberInput),
                createInputRow('Passport Expiration', passportDayDropdown),
                createInputRow('', passportMonthDropdown),
                createInputRow('', passportYearDropdown),
                createInputRow('Country Code', countryCodeDropdown),
                createInputRow('Phone Number', phoneNumberInput),
            ];

            for (let inputRow of inputRows) {
                form.appendChild(inputRow);
            }

            return form;
        }

        // Create and append the form to the body element
        const form = createForm();
        document.body.appendChild(form);


        return form;
    }


    // Function to create the save button
    function createSaveButton() {
        var button = document.createElement('button');
        button.textContent = 'Save';

        return button;
    }

    // Function to save the person data
    function savePersonData(personData) {
        var savedPersons = JSON.parse(localStorage.getItem('savedPersons')) || [];
        savedPersons.push(personData);
        localStorage.setItem('savedPersons', JSON.stringify(savedPersons));
    }

    // Function to display the list of saved persons
    function showSavedPersonsList() {
        clearPopupContent();
        var savedPersons = JSON.parse(localStorage.getItem('savedPersons')) || [];

        if (savedPersons.length === 0) {
            appendToPopup(createNoPersonsMessage());
        } else {
            savedPersons.forEach(function (person, index) {
                var personContainer = document.createElement('div');
                personContainer.className = 'person-container';

                var personName = document.createElement('span');
                personName.className = 'person-name';
                personName.textContent = person.firstName + ' ' + person.lastName;

                var viewButton = document.createElement('button');
                viewButton.className = 'view-button';
                viewButton.textContent = 'View';

                var delButton = document.createElement('button');
                delButton.className = 'del-button';
                delButton.textContent = 'Delete';

                personContainer.appendChild(personName);
                personContainer.appendChild(viewButton);
                personContainer.appendChild(delButton);

                viewButton.addEventListener('click', function () {
                    fillFormWithData(person);
                });

                delButton.addEventListener('click', function () {
                    savedPersons.splice(index, 1);
                    localStorage.setItem('savedPersons', JSON.stringify(savedPersons));
                    showSavedPersonsList();
                });

                appendToPopup(personContainer);
            });
        }
    }

    // Function to fill out the form on the current web page with person data
    function fillFormWithData(person) {

        function changeElementValue(person) {
            // change the value of elements on the page
            let fNameInput = document.querySelector('div.col-8.col-md-2.col-sm-12.custom__both__side__padding.mb-3.mb-md-0.no-padding-left input');
            let lNameInput = document.querySelector('div.col-12.col-md-2.col-sm-12.custom__both__side__padding.mt-3.mt-md-0 input');
            let emailInput = document.querySelector('div.col-sm-12.col-md-4 input');
            let ppNumInput = document.querySelector('[name="ppNumber"]');
            // select the input element that is child of the second div element that is child of div elemet having class name = "row phone-number"
            let phoneNumInput = document.querySelector('div.row.phone-number div:nth-child(2) input');

            // Set the value of the input field
            fNameInput.value = person.firstName;
            lNameInput.value = person.lastName;
            emailInput.value = person.email;
            ppNumInput.value = person.passportNumber;
            phoneNumInput.value = person.phoneNumber;

            // Create an `input` event
            let inputEvent = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            // Create a `change` event
            let changeEvent = new Event('change', {
                bubbles: true,
                cancelable: true,
            });

            // Dispatch the `input` and 'change' events
            fNameInput.dispatchEvent(inputEvent);
            fNameInput.dispatchEvent(changeEvent);
            lNameInput.dispatchEvent(inputEvent);
            lNameInput.dispatchEvent(changeEvent);
            emailInput.dispatchEvent(inputEvent);
            emailInput.dispatchEvent(changeEvent);
            ppNumInput.dispatchEvent(inputEvent);
            ppNumInput.dispatchEvent(changeEvent);
            phoneNumInput.dispatchEvent(inputEvent);
            phoneNumInput.dispatchEvent(changeEvent);

            /// Select the dropdown elements
            // select the birthdate
            const selectorsProperties = [
                ['.col-sm-12.col-md-6 .col-4:nth-child(1) input', 'dayBirthdate', '.ng-option-label'],
                ['.col-sm-12.col-md-6 .col-4:nth-child(2) input', 'monthBirthdate', '.ng-option-label'],
                ['.col-sm-12.col-md-6 .col-4:nth-child(3) input', 'yearBirthdate', '.ng-option-label'],

                ['.row.passport-details .col-sm-12.col-md-6 .col-4:nth-child(1) input', 'dayPassportExpDate', '.ng-option-label'],
                ['.row.passport-details .col-sm-12.col-md-6 .col-4:nth-child(2) input', 'monthPassportExpDate', '.ng-option-label'],
                ['.row.passport-details .col-sm-12.col-md-6 .col-4:nth-child(3) input', 'yearPassportExpDate', '.ng-option-label'],

                ['.col-sm-12.col-md-4.nationality-wrapper .ng-input input', 'nationality', '.ng-option span'],

                ['ng-select[name="ppIssueCountry"] .ng-input input', 'country', '.ng-option span'],

                ['.row.phone-number .ng-input input', 'countryCode', '.ng-option span']

            ];

            for (const [selector, property, secondSelector] of selectorsProperties) {
                const dropdown = document.querySelector(selector);
                dropdown.click(); // Open the dropdown
                dropdown.blur(); // Trigger the blur event
                dropdown.dispatchEvent(new Event('input', {bubbles: true, cancelable: true}));
                dropdown.dispatchEvent(new Event('change', {bubbles: true, cancelable: true}));

                const elements = document.querySelectorAll(secondSelector);
                let size = elements.length;
                let i = size - 1;
                for (const element of elements) {
                    if (element.innerHTML.includes(person[property])) {
                        element.click(); // Select the option
                        break; // Exit the loop after selecting the option
                    }
                    if (i <= 0) {
                        elements[0].click(); // Select the option
                    }
                    i--;
                }
                dropdown.click(); // Close the dropdown
            }


            console.log(person);
            console.log('values changed');
        }


        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            if (tabs.length > 0) {
                var currentTab = tabs[0];

                chrome.scripting.executeScript(
                    {
                        target: { tabId: currentTab.id },
                        function: changeElementValue,
                        args: [person]
                    },
                    function(result) {
                        // Handle the result of the content script execution
                        if (!chrome.runtime.lastError) {
                            console.log('Content script successfully executed');
                        } else {
                            console.error(chrome.runtime.lastError);
                        }
                    }
                );
            }
        });


    }

    // Function to clear the content of the pop-up page
    function clearPopupContent() {
        document.body.innerHTML = '';
    }

    // Function to append an element to the pop-up page
    function appendToPopup(element) {
        document.body.appendChild(element);
    }

    // Function to create a message when there are no saved persons
    function createNoPersonsMessage() {
        var message = document.createElement('p');
        message.textContent = 'No saved persons found.';

        return message;
    }
});

