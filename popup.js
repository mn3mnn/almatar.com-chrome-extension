document.addEventListener('DOMContentLoaded', function() {
    var addPersonBtn = document.getElementById('addPersonBtn');
    var fillFormBtn = document.getElementById('fillFormBtn');

    addPersonBtn.addEventListener('click', function() {
        showAddPersonForm();
    });

    fillFormBtn.addEventListener('click', function() {
        showSavedPersonsList();
    });

    // Data for dropdown options
    const dayOptions = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
    const monthOptions = [
        ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    ];

    const yearOptions = Array.from({ length: 101 }, (_, i) => String(1911 + i));
    const yearOptions2 = Array.from({ length: 60 }, (_, i) => String(2023 + i));

    const nationalityOptions = [
        ['سعودي', 'إماراتي', 'بحريني', 'كويتي', 'دولة قطر', 'عماني', 'مصري', 'سنغافوري', 'سويدي', 'سوداني', 'جزر سليمان', 'فلبيني', 'روسي', 'صربي', 'روماني', 'برتغالي', 'بورتوريكو', 'بولندي', 'باكستاني', 'بيروفي', 'بابواني', 'بولينزي', 'سوري', 'نيوزيلاندي', 'نرويجي', 'هولندي', 'نيجيري', 'نيجري', 'كاليدوني', 'نامبي', 'موزنبيقي', 'ماليزي', 'مكسيكي', 'مالاوني', 'موريشيوسي', 'سلوفيني', 'تونسي', 'تشادي', 'يمني', 'التشيك', 'صومالي', 'غانا', 'جيبوتي', 'سريلانكي', 'بوروندي', 'أثيوبي', 'مالى', 'افغانستاني', 'إريترى', 'نيبالى', 'زيمبابوني', 'زامبي', 'جنوب أفريقي', 'واليس وفوتونا', 'تايلاندي', 'فانواتوني', 'فيتنامي', 'جزر العذراء الأمريكية', 'جزر العذراء البريطانية', 'فنزويلي', 'أوزبكي', 'أمريكي', 'أوغندي', 'أوكراني', 'تنزاني', 'تايواني', 'ترينيدادي', 'تركي', 'بورمي', 'موريتاني', 'مقدوني', 'أنغولاني', 'كونغي', 'إكوادوري', 'جزائري', 'دومينيكاني', 'دانماركي', 'ألماني', 'قبرصي', 'الرأس الأخضر', 'كوبي', 'كولومبي', 'صيني', 'كاميروني', 'شيلي', 'ساحل العاج', 'سويسري', 'إفريقي', 'إسباني', 'بوركيني', 'أرجنتيني', 'نمساوي', 'أسترالي', 'بوسني', 'بنغلادشي', 'بلجيكي', 'بلغاري', 'كونغي', 'بروناوي', 'بوليفي', 'برازيلي', 'باهامي', 'بوتسواني', 'كندي', 'كونغي', 'فنلندي', 'مدغشقري', 'إيطالي', 'يوغسلافي', 'مغربي', 'ليبي', 'ليبيري', 'سانت لوسيا', 'لبناني', 'كازاخستاني', 'كوري', 'نيفيسي', 'جزر القمر', 'كيني', 'ياباني', 'أردني', 'جامايكي', 'آيسلندي', 'فيجي', 'هونغ كونغي', 'فرنسي', 'غابوني', 'بريطاني', 'جرينلاندي', 'غيني', 'يوناني', 'هندوراسي', 'إيراني', 'كرواتي', 'إندونيسي', 'أيرلندي', 'فلسطيني', 'هندي', 'عراقي', 'مالديفي'],
        ['Saudi', 'Emirati', 'Bahraini', 'Kuwaiti', 'Qatari', 'Omani', 'Egyptian', 'Singaporean', 'Swedish', 'Sudanese', 'Solomon Islander', 'Filipino', 'Russian', 'Serbian', 'Romanian', 'Portuguese', 'Puerto Rican', 'Polish', 'Pakistani', 'Peruvian', 'Papuan', 'Polynesian', 'Syrian', 'New Zealander', 'Norwegian', 'Dutch', 'Nigerian', 'Nigerien', 'Californian', 'Namibian', 'Mozambican', 'Malaysian', 'Mexican', 'Malawian', 'Mauritian', 'Slovenian', 'Tunisian', 'Chadian', 'Yemeni', 'Czech', 'Somali', 'Ghanaian', 'Djiboutian', 'Sri Lankan', 'Burundian', 'Ethiopian', 'Malian', 'Afghan', 'Eritrean', 'Nepali', 'Zimbabwean', 'Zambian', 'South African', 'Wallis and Futuna Islander', 'Thai', 'Vanuatuan', 'Vietnamese', 'American', 'British Virgin Islander', 'Virgin Islander', 'Venezuelan', 'Uzbek', 'American', 'Ugandan', 'Ukrainian', 'Tanzanian', 'Taiwanese', 'Trinidadian', 'Turkish', 'Burmese', 'Mauritanian', 'Macedonian', 'Angolan', 'Congolese', 'Ecuadorian', 'Algerian', 'Dominican', 'Danish', 'German', 'Cypriot', 'Cape Verdean', 'Cuban', 'Colombian', 'Chinese', 'Cameroonian', 'Chilean', 'Ivorian', 'Swiss', 'African', 'Spanish', 'Burkinabe', 'Argentinian', 'Austrian', 'Australian', 'Bosnian', 'Bangladeshi', 'Belgian', 'Bulgarian', 'Congolese', 'Bruneian', 'Bolivian', 'Brazilian', 'Bahamian', 'Motswana', 'Canadian', 'Congolese', 'Finnish', 'Malagasy', 'Italian', 'Yugoslavian', 'Moroccan', 'Libyan', 'Liberian', 'Saint Lucian', 'Lebanese', 'Kazakhstani', 'Korean', 'Nevisian', 'Comorian', 'Kenyan', 'Japanese', 'Jordanian', 'Jamaican', 'Icelandic', 'Fijian', 'Hong Konger', 'French', 'Gabonese', 'British', 'Greenlandic', 'Guinean', 'Greek', 'Honduran', 'Iranian', 'Croatian', 'Indonesian', 'Irish', 'Palestinian', 'Indian', 'Iraqi', 'Maldivian']
    ];

    const countryOptions = [
        ['المملكة العربية السعودية', 'الإمارات العربية المتحدة', 'البحرين', 'كويت', 'دولة قطر', 'عمان', 'مصر', 'سنغافورا', 'السويد', 'السودان', 'جزر سليمان', 'الفلبين', 'روسيا', 'صربيا', 'رومانيا', 'البرتغال', 'بورتوريكو', 'بولندا', 'باكستان', 'بيرو', 'بابوا غينيا الجديدة', 'بولينزيا الفرنسية', 'سوريا', 'نيوزيلاندا', 'النرويج', 'هولندا', 'نيجيريا', 'النيجر', 'كاليدونيا الجديدة', 'نامبيا', 'الموزنبيق', 'ماليزيا', 'المكسيك', 'مالاوي', 'موريشيوس', 'سلوفينيا', 'تونس', 'تشاد', 'اليمن', 'التشيك', 'صومال', 'غانا', 'جيبوتي', 'سريلانكا', 'جمهورية بوروندي', 'أثيوبيا', 'مالى', 'افغانستان', 'إريتريا', 'نيبال', 'زيمبابوي', 'زامبيا', 'جنوب أفريقيا', 'واليس وفوتونا', 'تايلاند', 'فانواتو', 'فيتنام', 'جزر العذراء الأمريكية', 'جزر العذراء البريطانية', 'فنزويلا', 'أوزباكستان', 'الولايات المتحدة الأمريكية', 'أوغندا', 'أوكرانيا', 'تنزانيا', 'تايوان', 'ترينيداد وتوباغو', 'تركيا', 'بورما', 'موريتانيا', 'مقدونيا', 'أنغولا', 'كونغو', 'إكوادور', 'الجزائر', 'جمهورية الدومينيكان', 'الدنمارك', 'ألمانيا', 'قبرص', 'الرأس الأخضر', 'كوبا', 'كولومبيا', 'الصين', 'كاميرون', 'تشيلي', 'ساحل العاج', 'سويسرا', 'جمهورية أفريقيا الوسطى', 'إسبانيا', 'بوركينا فاسو', 'الأرجنتين', 'النمسا', 'أستراليا', 'البوسنة والهوسك', 'بنغلاديش', 'بلجيكا', 'بلغاريا', 'جمهورية الكونغو الديمقراطية', 'بروناي', 'بوليفيا', 'البرازيل', 'باهاماس', 'بوتسوانا', 'كندا', 'كونغو', 'فنلندا', 'مدغشقر', 'إيطاليا', 'يوغسلافيا', 'المغرب', 'ليبيا', 'ليبيريا', 'سانت لوسيا', 'لبنان', 'كازاخستان', 'كوريا الجنوبية', 'نيفيس', 'جزر القمر', 'كينيا', 'اليابان', 'الأردن', 'جامايكا', 'آيسلندا', 'فيجي', 'هونغ كونغ', 'فرنسا', 'الغابون', 'بريطانيا', 'جرينلاند', 'غينيا', 'اليونان', 'هندوراس', 'إيران', 'كرواتيا', 'إندونيسيا', 'إيرلندا', 'فلسطين', 'الهند', 'العراق', 'جزر المالديف'],
        ['Saudi Arabia', 'United Arab Emirates', 'Bahrain', 'Kuwait', 'Qatar', 'Oman', 'Egypt', 'Singapore', 'Sweden', 'Sudan', 'Solomon Islands', 'Philippines', 'Russia', 'Serbia', 'Romania', 'Portugal', 'Puerto Rico', 'Poland', 'Pakistan', 'Peru', 'Papua New Guinea', 'French Polynesia', 'Syria', 'New Zealand', 'Norway', 'Netherlands', 'Nigeria', 'Niger', 'New Caledonia', 'Namibia', 'Mozambique', 'Malaysia', 'Mexico', 'Malawi', 'Mauritius', 'Slovenia', 'Tunisia', 'Chad', 'Yemen', 'Czech Republic', 'Somalia', 'Ghana', 'Djibouti', 'Sri Lanka', 'Burundi', 'Ethiopia', 'Mali', 'Afghanistan', 'Eritrea', 'Nepal', 'Zimbabwe', 'Zambia', 'South Africa', 'Wallis and Futuna', 'Thailand', 'Vanuatu', 'Vietnam', 'US Virgin Islands', 'British Virgin Islands', 'Venezuela', 'Uzbekistan', 'United States of America', 'Uganda', 'Ukraine', 'Tanzania', 'Taiwan', 'Trinidad and Tobago', 'Turkey', 'Myanmar', 'Mauritania', 'Macedonia', 'Angola', 'Congo', 'Ecuador', 'Algeria', 'Dominican Republic', 'Denmark', 'Germany', 'Cyprus', 'Cape Verde', 'Cuba', 'Colombia', 'China', 'Cameroon', 'Chile', 'Ivory Coast', 'Switzerland', 'Central African Republic', 'Spain', 'Burkina Faso', 'Argentina', 'Austria', 'Australia', 'Bosnia and Herzegovina', 'Bangladesh', 'Belgium', 'Bulgaria', 'Democratic Republic of the Congo', 'Brunei', 'Bolivia', 'Brazil', 'Bahamas', 'Botswana', 'Canada', 'Congo', 'Finland', 'Madagascar', 'Italy', 'Yugoslavia', 'Morocco', 'Libya', 'Liberia', 'Saint Lucia', 'Lebanon', 'Kazakhstan', 'South Korea', 'Saint Kitts and Nevis', 'Comoros', 'Kenya', 'Japan', 'Jordan', 'Jamaica', 'Iceland', 'Fiji', 'Hong Kong', 'France', 'Gabon', 'Britain', 'Greenland', 'Guinea', 'Greece', 'Honduras', 'Iran', 'Croatia', 'Indonesia', 'Ireland', 'Palestine', 'India', 'Iraq', 'Maldives']
    ];
    // const countryCodeOptions = ['+966', '+973', '+965', '+974', '+968', '+20', '+65', '+46', '+249', '+677', '+63', '+7', '+381', '+40', '+351', '+1 939', '+48', '+92', '+51', '+675', '+689', '+963', '+64', '+47', '+31', '+234', '+227', '+687', '+264', '+258', '+60', '+52', '+265', '+230', '+386', '+216', '+235', '+967', '+420', '+252', '+233', '+253', '+94', '+257', '+251', '+223', '+93', '+977', '+977', '+263', '+260', '+27', '+681', '+66', '+678', '+84', '+58', '+998', '+256', '+380', '+255', '+886', '+1 868', '+90', '+95', '+222', '+389', '+244', '+242', '+593', '+213', '+45', '+49', '+537', '+238', '+53', '+57', '+86', '+237', '+56', '+225', '+41', '+34', '+226', '+54', '+43', '+61', '+387', '+880', '+32', '+359', '+673', '+591'];


    // Function to display the form for adding a new person
    function showAddPersonForm(person = null) {
        clearPopupContent();
        document.querySelector('body').style.width = '570px';
        var form = createPersonForm();
        var saveButton = createSaveButton();
        var person_id = null;

        if (!person){  // if person is null, then it's a new person
            person_id = Date.now();
        }
        else{
            person_id = person.id;
        }

        saveButton.addEventListener('click', function() {
            var personData = {
                id: person_id,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                dayBirthdate: document.getElementById('dayBirthdate').value,
                monthBirthdate: monthOptions[0][monthOptions[1].indexOf(document.getElementById('monthBirthdate').value)] ,
                yearBirthdate: document.getElementById('yearBirthdate').value,
                nationality: nationalityOptions[0][nationalityOptions[1].indexOf(document.getElementById('nationality').value)],
                country: countryOptions[0][countryOptions[1].indexOf(document.getElementById('country').value)],
                passportNumber: document.getElementById('passportNumber').value,
                dayPassportExpDate: document.getElementById('dayPassportExpDate').value,
                monthPassportExpDate: monthOptions[0][monthOptions[1].indexOf(document.getElementById('monthPassportExpDate').value)],
                yearPassportExpDate: document.getElementById('yearPassportExpDate').value,
                phoneNumber: document.getElementById('phoneNumber').value
                // countryCode: document.getElementById('countryCode').value
            };

            savePersonData(personData);
            clearPopupContent();
            showSavedPersonsList();
        });

        appendToPopup(form);
        if (person){  // if person is not null, then it's an existing person to be edited
            fillAddPersonForm(person);
        }
        appendToPopup(saveButton);
    }

    // Function to create the person data form
    function createPersonForm() {


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
        function createInputRow(labelText, inputField, dropdownInputs = []) {
            const container = document.createElement('div');
            container.className = 'form-row';

            const label = document.createElement('label');
            label.textContent = labelText;
            container.appendChild(label);

            if (dropdownInputs.length > 0) {
                const dropdownContainer = document.createElement('div');
                dropdownContainer.className = 'dropdown-row';
                for (let dropdownInput of dropdownInputs) {
                    dropdownInput.className = 'dropdown-input';
                    dropdownContainer.appendChild(dropdownInput);
                }
                container.appendChild(dropdownContainer);
            }
            else{
                container.appendChild(inputField);
            }


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
            dayDropdown.id = 'dayBirthdate';
            const monthDropdown = createDropdownList(monthOptions[1]);
            monthDropdown.id = 'monthBirthdate';
            monthDropdown.value = monthOptions[1][0];

            const yearDropdown = createDropdownList(yearOptions);
            yearDropdown.id = 'yearBirthdate';

            ////////////////////////////////////////////
            yearDropdown.value = yearOptions[89]; // 2000 is the default year
            ////////////////////////////////////////////

            const nationalityDropdown = createDropdownList(nationalityOptions[1]);
            nationalityDropdown.id = 'nationality';

            const countryDropdown = createDropdownList(countryOptions[1]);
            countryDropdown.id = 'country';

            const passportNumberInput = document.createElement('input');
            passportNumberInput.type = 'text';
            passportNumberInput.placeholder = 'Passport Number';
            passportNumberInput.id = 'passportNumber';

            const passportDayDropdown = createDropdownList(dayOptions);
            passportDayDropdown.id = 'dayPassportExpDate';
            const passportMonthDropdown = createDropdownList(monthOptions[1]);
            passportMonthDropdown.id = 'monthPassportExpDate';
            const passportYearDropdown = createDropdownList(yearOptions2);
            passportYearDropdown.id = 'yearPassportExpDate';

            // const countryCodeDropdown = createDropdownList(countryCodeOptions);
            // countryCodeDropdown.id = 'countryCode';

            const phoneNumberInput = document.createElement('input');
            phoneNumberInput.type = 'text';
            phoneNumberInput.placeholder = 'Phone Number';
            phoneNumberInput.id = 'phoneNumber';

            const inputRows = [
                createInputRow('First Name', firstNameInput),
                createInputRow('Last Name', lastNameInput),
                createInputRow('Email', emailInput),
                createInputRow('Birthdate', null, [dayDropdown, monthDropdown, yearDropdown]),
                createInputRow('Nationality', nationalityDropdown),
                createInputRow('Country', countryDropdown),
                createInputRow('Passport Number', passportNumberInput),
                createInputRow('Passport Expiration', null, [passportDayDropdown, passportMonthDropdown, passportYearDropdown]),
                // createInputRow('Country Code', countryCodeDropdown),
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
        button.className = 'save-button';

        return button;
    }

    // Function to save the person data
    function savePersonData(person) {
        var savedPersons = JSON.parse(localStorage.getItem('savedPersons')) || [];
        // update the savedPersons array with the new person, replace the old one if it exists
        var personIndex = savedPersons.findIndex(function (savedPerson) {
            return savedPerson.id === person.id;
        });
        if (personIndex > -1) {
            savedPersons[personIndex] = person;
        }
        else {
            savedPersons.push(person);
        }
        localStorage.setItem('savedPersons', JSON.stringify(savedPersons));
    }

    function showPersons(persons){
        if (persons.length > 0) {
            if (document.querySelector('.no-persons-message')) {
                document.querySelector('.no-persons-message').remove();
            }
        }
        persons.forEach(function (person, index) {
            var personContainer = document.createElement('div');
            personContainer.className = 'person-container';

            var personName = document.createElement('span');
            personName.className = 'person-name';
            personName.textContent = person.firstName + ' ' + person.lastName;

            var personNumberInput = document.createElement('input');
            personNumberInput.type = 'number';
            personNumberInput.className = 'personFormNumber';
            personNumberInput.id = 'person' + index + '-formNumber'
            personNumberInput.min = '1';
            personNumberInput.max = '7';


            var viewButton = document.createElement('button');
            viewButton.className = 'view-button';
            viewButton.textContent = 'View';

            var editButton = document.createElement('button');
            editButton.className = 'view-button';
            editButton.textContent = 'Edit';

            var delButton = document.createElement('button');
            delButton.className = 'del-button';
            delButton.textContent = 'Delete';

            personContainer.appendChild(personName);
            personContainer.appendChild(personNumberInput);
            personContainer.appendChild(viewButton);
            personContainer.appendChild(editButton);
            personContainer.appendChild(delButton);

            viewButton.addEventListener('click', function () {
                fillFormWithData(person, index);
            });

            editButton.addEventListener('click', function () {
                showAddPersonForm(person);
            });

            delButton.addEventListener('click', function () {
                // get and delete this person from the savedPersons array by name
                var savedPersons = JSON.parse(localStorage.getItem('savedPersons')) || [];
                var personIndex = savedPersons.findIndex(function (savedPerson) {
                    return person.id === savedPerson.id;
                }
                );
                savedPersons.splice(personIndex, 1);
                localStorage.setItem('savedPersons', JSON.stringify(savedPersons));
                showSavedPersonsList();
            });

            appendToPopup(personContainer);
        });
    }


    // Function to display the list of saved persons
    function showSavedPersonsList() {
        clearPopupContent();
        document.querySelector('body').style.width = '400px';
        var savedPersons = JSON.parse(localStorage.getItem('savedPersons')) || [];

        var searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search...';
        searchInput.className = 'search-input';
        searchInput.addEventListener('input', handleSearchInput);

        appendToPopup(searchInput);

        if (savedPersons.length === 0) {
            appendToPopup(createNoPersonsMessage());
        } else {
            showPersons(savedPersons);
        }

        function clearPersonsList() {
            var personContainers = document.querySelectorAll('.person-container');
            personContainers.forEach(function (personContainer) {
                personContainer.remove();
            });
        }

        function handleSearchInput() {
            var searchTerm = searchInput.value.toLowerCase();
            var filteredPersons = savedPersons.filter(function (person) {
                var fullName = person.firstName.toLowerCase() + ' ' + person.lastName.toLowerCase();
                return fullName.includes(searchTerm);
            });

            clearPersonsList();

            if (filteredPersons.length === 0) {
                // show no persons message if there are no persons in the list, check if it is not already there
                if (!document.querySelector('.no-persons-message')) {
                    appendToPopup(createNoPersonsMessage());
                }
            } else {
                showPersons(filteredPersons);
            }
        }
    }


    // Function to fill out the form on the current web page with person data
    function fillFormWithData(person, index) {

        function changeElementValue(person, formNum) {
            // change the value of elements on the page
            let fNameInput = document.querySelector('form app-traveller-data:nth-child(' + formNum + ') ' + 'div.col-8.col-md-2.col-sm-12.custom__both__side__padding.mb-3.mb-md-0.no-padding-left input');
            let lNameInput = document.querySelector('form app-traveller-data:nth-child(' + formNum + ') ' + 'div.col-12.col-md-2.col-sm-12.custom__both__side__padding.mt-3.mt-md-0 input');
            let ppNumInput = document.querySelector('form app-traveller-data:nth-child(' + formNum + ') ' + '[name="ppNumber"]');

            // Set the value of the input field
            fNameInput.value = person.firstName;
            lNameInput.value = person.lastName;
            ppNumInput.value = person.passportNumber;


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
            ppNumInput.dispatchEvent(inputEvent);
            ppNumInput.dispatchEvent(changeEvent);


            if (formNum == 1){ // if it is the first form then fill the phone number and email
                let phoneNumInput = document.querySelector('form app-traveller-data:nth-child(' + formNum + ') ' + 'div.row.phone-number div:nth-child(2) input');
                phoneNumInput.value = person.phoneNumber;
                phoneNumInput.dispatchEvent(inputEvent);
                phoneNumInput.dispatchEvent(changeEvent);

                let emailInput = document.querySelector('form app-traveller-data:nth-child(' + formNum + ') ' + 'div.col-sm-12.col-md-4 input');
                emailInput.value = person.email;
                emailInput.dispatchEvent(inputEvent);
                emailInput.dispatchEvent(changeEvent);
            }


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

                ['ng-select[name="ppIssueCountry"] .ng-input input', 'country', '.ng-option span']

                // ['.row.phone-number .ng-input input', 'countryCode', '.ng-option span']

            ];

            // add this string before each selector in the array
            const preSelector = 'form app-traveller-data:nth-child(' + formNum + ') ';
            // add this string before each second selector in the array
            for (let i = 0; i < selectorsProperties.length; i++) {
                selectorsProperties[i][0] = preSelector + selectorsProperties[i][0];
                selectorsProperties[i][2] = preSelector + selectorsProperties[i][2];
            }

            for (const [selector, property, secondSelector] of selectorsProperties) {
                try {
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
                catch (e) {
                    console.log(e);
                }
            }

            console.log(person);
            console.log('values changed');
        }


        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            if (tabs.length > 0) {
                const currentTab = tabs[0];
                let formNum = document.getElementById('person' + index + '-formNumber').value;
                if (!formNum) {
                    formNum = '1';
                }
                console.log('formNum: ' + formNum);
                chrome.scripting.executeScript(
                    {
                        target: { tabId: currentTab.id },
                        function: changeElementValue,
                        args: [person, formNum]
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
        let message = document.createElement('p');
        message.classList.add('no-persons-message');
        message.textContent = 'No saved persons found.';

        return message;
    }

    function fillAddPersonForm(person) {
        // fill the form in the extension with the person data
        let IDs = ['firstName', 'lastName', 'passportNumber', 'phoneNumber', 'email', 'country', 'nationality',
            'dayBirthdate', 'monthBirthdate', 'yearBirthdate',
            'dayPassportExpDate', 'monthPassportExpDate', 'yearPassportExpDate'];

        for (let i = 0; i < IDs.length; i++) {
            try {
                let input = document.getElementById(IDs[i]);
                if (IDs[i] === 'monthBirthdate' || IDs[i] === 'monthPassportExpDate') {
                    input.value = monthOptions[1][monthOptions[0].indexOf(person[IDs[i]])];
                }
                else if (IDs[i] === 'country'){
                    input.value = countryOptions[1][countryOptions[0].indexOf(person[IDs[i]])];
                }
                else if (IDs[i] === 'nationality'){
                    input.value = nationalityOptions[1][nationalityOptions[0].indexOf(person[IDs[i]])];
                }
                else {
                    input.value = person[IDs[i]];
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

});

