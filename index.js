window.onload=function(){
    const f=document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"https://httpbin.org/post");

    const nameLabel=document.createElement("Label");
    nameLabel.textContent ="name:";
    const i=document.createElement("input");
    i.type="text";
    i.name="user_name";
    i.placeholder="enter your full name";
    i.required ="true";

    f.appendChild(nameLabel);
    f.appendChild(i);
    f.appendChild(document.createElement("br"));
    f.appendChild(document.createElement("br"));

    const EmailLabel = document.createElement("Label");
    EmailLabel.textContent="Email:";
    const e =document.createElement("input");
    e.type="text";
    e.required ="true";
    e.name="user_Email:";
    e.placeholder="enter your Email";
    f.appendChild(EmailLabel);
    f.appendChild(e);
    f.appendChild(document.createElement("br"));
    f.appendChild(document.createElement("br"));


    const PasswordLabel = document.createElement("Label");
    PasswordLabel.textContent ="Password:";

    const p = document.createElement("input");
    p.type="Password";
    p.name="Password";
    p.required ="true";
    p.unique ="true";
    p.placeholder="Enter your password";
    f.appendChild(PasswordLabel);
    f.appendChild(p);
    f.appendChild(document.createElement("br"));
    f.appendChild(document.createElement("br"));

    document.body.appendChild(f);

    const messageComments = document.createElement("Comments");
    messageComments.textContent ="Comments:";

    const c =document.createElement("input");
    c.type="comment";
    c.name="message";
    c.placeholder ="type here your message...";
    c.required ="true";
    c.unique ="text";

    f.appendChild(messageComments);
    f.appendChild(c);
    f.appendChild(document.createElement("br"));
    

    document.body.appendChild(f);

    const s =document.createElement("input");
    s.type ="submit";
    s.value ="submit";
    f.appendChild(s);

    document.body.appendChild(f);

    PasswordLabel.style.position ="relative";
    PasswordLabel.style.fontSize ="20px";
    PasswordLabel.style.color ="black";
    PasswordLabel.style.top ="50px";
    PasswordLabel.style.fontWeight ="900";
    PasswordLabel.style.fontStyle ="italic";
    PasswordLabel.style.marginLeft ="20px";


    p.style.width ="30vw";
    p.style.height ="6vh";
    p.style.position ="relative";
    p.style.justifySelf ="center";
    p.style.border ="1px solid indigo";
    p.style.color ="white";
    p.style.backgroundColor ="#0e0d0dff";
    p.style.borderRadius ="5px";
    p.style.top ="50px";
    p.style.flexWrap ="wrap";
    p.style.cursor ="pointer";
    p.style.color ="white";
    p.style.fontSize ="20px";
    p.style.fontWeight ="500";
    p.style.font ="bold";
    
    
    messageComments.style.position ="relative";
    messageComments.style.fontSize ="20px";
    messageComments.style.fontWeight ="900";
    messageComments.style.alignItems ="center";
    messageComments.style.color ="black";
    messageComments.style.fontStyle ="italic";
    messageComments.style.top ="50px";
    

    c.style.position ="relative";
    c.style.width ="30vw";
    c.style.height ="10vh";
    c.style.border ="1px solid indigo";
    c.style.backgroundColor ="#000";
    c.style.color ="white";
    c.style.top ="50px";
    c.style.textAlign ="center";

   f.style.justifySelf ="center";
   f.style.bottom ="870px";
   f.style.width ="100vw";
   f.style.flexWrap ="wrap";
   f.style.height ="50vh";
   f.style.borderRadius ="20px";
   f.style.position ="relative";
   f.style.textAlign ="center";

    i.style.width ="30vw";
    i.style.height ="6vh";
    i.style.position ="relative";
    i.style.justifySelf ="center";
    i.style.flexWrap ="wrap";
    i.style.border ="1px solid indigo";
    i.style.backgroundColor ="#0e0d0dff";
    i.style.borderRadius ="5px";
    i.style.top ="50px";
    i.style.cursor ="pointer";
    i.style.fontSize ="20px";
    i.style.fontWeight ="500";
    i.style.font ="bold";
    i.style.color ="white";

    nameLabel.style.position ="relative";
    nameLabel.style.top ="50px";
    nameLabel.style.fontSize ="20px";
    nameLabel.style.fontWeight ="900";
    nameLabel.style.fontStyle ="italic";
    nameLabel.style.textTransform ="capitalize";


    e.style.width ="30vw";
    e.style.height ="6vh";
    e.style.position ="relative";
    e.style.justifySelf ="center";
    e.style.border ="1px solid indigo";
    e.style.color ="white";
    e.style.flexWrap ="wrap";
    e.style.backgroundColor ="#0e0d0dff";
    e.style.borderRadius ="5px";
    e.style.top ="50px";
    e.style.cursor ="pointer";
    e.style.font ="bold";
    e.style.fontWeight ="500";
    e.style.fontSize ="20px";

    EmailLabel.style.position ="relative";
    EmailLabel.style.top ="50px";
    EmailLabel.style.color ="black";
    EmailLabel.style.fontSize ="20px";
    EmailLabel.style.fontWeight ="900";
    EmailLabel.style.fontStyle ="italic";
    EmailLabel.style.textTransform ="capitalize";


    s.style.position ="relative";
    s.style.top ="60px";
    s.style.justifySelf ="center";
    s.style.width ="20vw";
    s.style.height ="6vh";
    s.style.flexWrap ="wrap";
    s.style.fontWeight ="500";
    s.style.fontSize ="20px";
    s.style.border ="1px solid rgba(66, 100, 202, 1)"
    s.style.backgroundColor ="green";
    s.style.color ="white";
    s.style.marginLeft ="20px";
    s.style.borderRadius ="20px";
    s.style.cursor ="pointer";
    s.style.transition ="all ease 0.3s";
    

    s.animate([
        {transform:'translateX(0px)',opacity:0.001},
        {transform:'translateX(20px)',opacity:1,}
    ],{
        duration:950,
        iterationStart:4,
        iterations:Infinity,
        delay:10,
        direction:'alternate-reverse',
    });

    const adjustLayout = () => {
    const width = window.innerWidth;
    if (width < 600) {
        
        f.style.bottom ="500px";
        input.style.width = '90%';
        f.style.position ="relative";
        i.style.width ="30vw";
         f.style.marginBottom ="2000px";
       
    } else {
       
        f.style.display = 'grid';
        input.style.width = '30vw';
        f.style.position ="relative";
    }
    window.addEventListener('resize', adjustLayout);
adjustLayout();
}}


/// 1. Select your existing button
const involvedBtn = document.getElementById('involved');

// 2. Global Styles for Professional Animations
const injectStyles = () => {
    if (document.getElementById('modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.innerHTML = `
        @keyframes modalShow {
            from { opacity: 0; transform: scale(0.9) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes overlayFade {
            from { background: rgba(0,0,0,0); }
            to { background: rgba(0,0,0,0.85); }
        }
        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            display: flex; justify-content: center; align-items: center;
            z-index: 10000; backdrop-filter: blur(5px);
            animation: overlayFade 0.3s forwards;
        }
        .modal-card {
            background: #ffffff; padding: 40px; border-radius: 20px;
            width: 100%; max-width: 400px; text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            animation: modalShow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        .modal-card input {
            width: 100%; padding: 14px; margin: 10px 0;
            border: 1px solid #e0e0e0; border-radius: 10px;
            font-size: 16px; transition: border 0.3s; box-sizing: border-box;
        }
        .modal-card input:focus { border-color: #2ecc71; outline: none; }
        .submit-btn {
            width: 100%; padding: 15px; background: #2ecc71; color: white;
            border: none; border-radius: 10px; font-size: 16px; font-weight: bold;
            cursor: pointer; transition: 0.3s; margin-top: 10px;
        }
        .submit-btn:hover { background: #27ae60; transform: translateY(-2px); }
        .close-link { color: #888; font-size: 14px; cursor: pointer; text-decoration: underline; margin-top: 20px; display: inline-block; }
    `;
    document.head.appendChild(style);
};

involvedBtn.addEventListener('click', function(e) {
    e.preventDefault();
    injectStyles();

    // 3. Create the Modal Structure
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    overlay.innerHTML = `
        <div class="modal-card">
            <div style="font-size: 40px; margin-bottom: 10px;">📄</div>
            <h2 style="margin:0; color:#2c3e50;">Access Resources</h2>
            <p style="color:#7f8c8d; font-size:14px; margin-bottom:25px;">Enter your info to receive the files.</p>
            
            <!-- Link to Formspree for Email Delivery to bafekureraevariste@gmail.com -->
            <form action="https://formspree.io" method="POST" id="resourceForm">
                <input type="text" name="name" placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <input type="hidden" name="_subject" value="New Resource Request - Hope Tree Eva">
                <button type="submit" class="submit-btn" id="submitBtn">Unlock & Send to My Email</button>
            </form>
            
            <span class="close-link" id="cancelBtn">I'll do this later</span>
        </div>
    `;

    document.body.appendChild(overlay);

    // 4. Handle Submission Logic
    const form = document.getElementById('resourceForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        submitBtn.innerText = "Processing...";
        submitBtn.disabled = true;

        const formData = new FormData(form);

        // Send to Formspree (which goes to your Gmail)
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert("Success! Your details were sent to bafekureraevariste@gmail.com. Downloading now...");
                window.location.href = "https://example.com/your-resource-file.pdf"; // Replace with real URL
                document.body.removeChild(overlay);
            } else {
                throw new Error();
            }
        } catch (error) {
            alert("Oops! There was a problem. Please try again.");
            submitBtn.innerText = "Unlock & Send";
            submitBtn.disabled = false;
        }
    });

    // 5. Handle Cancel/Close
    document.getElementById('cancelBtn').addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => document.body.removeChild(overlay), 300);
    });
});


//homeService
// 1. Target the existing Home card
const homeCard = document.getElementById('homeService');

// 2. Add full functionality on click
homeCard.addEventListener('click', function(e) {
    e.preventDefault();
    renderTravelPortal();
});

function renderTravelPortal() {
    // --- STEP 1: CREATE DYNAMIC STYLES ---
    const style = document.createElement('style');
    style.innerHTML = `
        .travel-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 9999; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .travel-modal { background: #fff; width: 90%; max-width: 500px; padding: 25px; border-radius: 15px; position: relative; max-height: 90vh; overflow-y: auto; }
        .service-tabs { display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .tab { cursor: pointer; padding: 8px 15px; border-radius: 5px; background: #f4f4f4; font-weight: bold; }
        .tab.active { background: #007bff; color: white; }
        .form-group { margin-bottom: 15px; text-align: left; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: 600; }
        .form-group input, .form-group select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
        .book-btn { width: 100%; padding: 12px; background: #28a745; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; transition: 0.3s; }
        .book-btn:hover { background: #218838; }
        .close-portal { position: absolute; top: 10px; right: 15px; font-size: 24px; cursor: pointer; color: #999; }
    `;
    document.head.appendChild(style);

    // --- STEP 2: CREATE THE PORTAL STRUCTURE ---
    const overlay = document.createElement('div');
    overlay.className = 'travel-overlay';
    
    overlay.innerHTML = `
        <div class="travel-modal">
            <span class="close-portal">&times;</span>
            <h2 style="margin-top:0;">Global Travel Services</h2>
            <div class="service-tabs">
                <div class="tab active" data-service="flight">✈️ Flights</div>
                <div class="tab" data-service="hotel">🏨 Hotels</div>
                <div class="tab" data-service="ticket">🎫 Tickets</div>
            </div>
            <form id="bookingForm">
                <div id="dynamicFields"></div>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required>
                </div>
                <button type="submit" class="book-btn">Confirm Booking</button>
            </form>
        </div>
    `;
    document.body.appendChild(overlay);

    // --- STEP 3: FUNCTIONALITY LOGIC ---
    const dynamicFields = document.getElementById('dynamicFields');
    const tabs = document.querySelectorAll('.tab');

    // Function to change form based on service
    const updateForm = (service) => {
        if (service === 'flight') {
            dynamicFields.innerHTML = `
                <div class="form-group"><label>From</label><input type="text" placeholder="Departure City" required></div>
                <div class="form-group"><label>To</label><input type="text" placeholder="Destination City" required></div>
                <div class="form-group"><label>Date</label><input type="date" required></div>
            `;
        } else if (service === 'hotel') {
            dynamicFields.innerHTML = `
                <div class="form-group"><label>Destination</label><input type="text" placeholder="City or Hotel Name" required></div>
                <div class="form-group"><label>Check-in</label><input type="date" required></div>
                <div class="form-group"><label>Guests</label><select><option>1 Guest</option><option>2 Guests</option><option>Group</option></select></div>
            `;
        } else {
            dynamicFields.innerHTML = `
                <div class="form-group"><label>Event/Transport Type</label><select><option>Train Ticket</option><option>Bus Ticket</option><option>Museum Entry</option></select></div>
                <div class="form-group"><label>Quantity</label><input type="number" min="1" value="1"></div>
            `;
        }
    };

    // Initialize with Flight form
    updateForm('flight');

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateForm(tab.dataset.service);
        });
    });

    // Close logic
    document.querySelector('.close-portal').onclick = () => document.body.removeChild(overlay);

    // Final Booking Submission
    document.getElementById('bookingForm').onsubmit = function(e) {
        e.preventDefault();
        const activeService = document.querySelector('.tab.active').innerText;
        alert(`Booking Successful for ${activeService}!\nYour digital ticket and confirmation have been sent to your email.`);
        document.body.removeChild(overlay);
    };
}



const roamingCard = document.getElementById('RoamingService');

// App State Management
let state = {
    lang: 'kin',
    theme: 'light',
    selectedBundle: null,
    view: 'selection', // 'selection', 'details', 'receipt'
    userData: {}
};

const myContact = "+250785786547";

const translations = {
    kin: {
        brand: "Hope Tree Eva",
        title: "Gukoresha telefone mu mahanga",
        instruction: "Kanda *140# hitamo Option 6",
        day: "Umunsi", week: "Icyumweru", month: "Ukwezi",
        btn: "KOMEZA",
        donateTitle: "Ibisabwa n'Inkunga",
        name: "Izina ryose", age: "Imyaka", country: "Igihugu",
        date: "Itariki yo kwishyura", interest: "Inyungu za Banki (%)",
        amount: "Ingano y'inkunga",
        submitBtn: "EMEZA & BINYITSE",
        downloadBtn: "DOWNLOAD RECEIPT (Inyemezabwishyu)",
        success: "Murakoze! Inyemezabwishyu yawe yabonetse.",
        agentBtn: "Hamagara Hope Tree Support",
        themeToggle: "🌙 Ihindure Umukara",
        langToggle: "🇬🇧 English"
    },
    en: {
        brand: "Hope Tree Eva",
        title: "International Roaming",
        instruction: "Dial *140# and select Option 6",
        day: "Day", week: "Week", month: "Month",
        btn: "CONTINUE",
        donateTitle: "Bank & Personal Details",
        name: "Full Name", age: "Age", country: "Country",
        date: "Payment Date", interest: "Bank Interest (%)",
        amount: "Donation Amount",
        submitBtn: "CONFIRM & SAVE",
        downloadBtn: "DOWNLOAD RECEIPT",
        success: "Success! Your receipt is ready for download.",
        agentBtn: "Call Hope Tree Support",
        themeToggle: "☀️ Light Mode",
        langToggle: "🇷🇼 Kinyarwanda"
    }
};

// CSS Injection with Animations
const injectGlobalStyles = () => {
    if (document.getElementById('roaming-styles')) return;
    const style = document.createElement('style');
    style.id = 'roaming-styles';
    style.innerHTML = `
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .roaming-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: center; z-index: 10000; font-family: 'Inter', sans-serif; animation: fadeIn 0.3s ease; }
        .roaming-modal { width: 92%; max-width: 440px; padding: 25px; border-radius: 28px; position: relative; border-top: 8px solid #2ecc71; animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow-y: auto; max-height: 90vh; transition: background 0.3s, color 0.3s; box-shadow: 0 25px 50px rgba(0,0,0,0.5); }
        
        .theme-light { background: #ffffff; color: #1a1a1a; }
        .theme-dark { background: #1a1a1a; color: #f5f5f5; border-top-color: #27ae60; }
        
        .sys-bar { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .sys-btn { cursor: pointer; padding: 6px 12px; border-radius: 12px; border: 1px solid rgba(128,128,128,0.3); font-size: 11px; background: rgba(128,128,128,0.1); color: inherit; font-weight: bold; transition: 0.2s; }
        .sys-btn:hover { background: #2ecc71; color: white; }

        .form-group { margin-top: 15px; text-align: left; }
        .form-group label { display: block; font-size: 12px; font-weight: bold; margin-bottom: 5px; opacity: 0.8; }
        .form-group input { width: 100%; padding: 12px; border-radius: 12px; border: 1px solid rgba(128,128,128,0.3); background: transparent; color: inherit; box-sizing: border-box; outline: none; transition: 0.3s; }
        .form-group input:focus { border-color: #2ecc71; box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.2); }

        .bundle-option { border: 2px solid rgba(128,128,128,0.2); padding: 15px; border-radius: 15px; cursor: pointer; text-align: center; transition: 0.3s; font-weight: bold; }
        .bundle-option.selected { border-color: #2ecc71; background: rgba(46, 204, 113, 0.1); transform: scale(1.05); }

        .activate-btn { width: 100%; padding: 16px; background: #2ecc71; color: white; border: none; border-radius: 50px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 20px; transition: 0.3s; }
        .activate-btn:hover { background: #27ae60; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3); }
        .activate-btn:active { transform: scale(0.98); }

        .receipt-box { border: 2px dashed #2ecc71; padding: 20px; margin-top: 20px; border-radius: 18px; font-size: 14px; line-height: 1.6; background: rgba(46, 204, 113, 0.05); }
        .close-icon { position: absolute; top: 15px; right: 20px; font-size: 30px; cursor: pointer; opacity: 0.5; transition: 0.2s; }
        .close-icon:hover { color: #ff4444; opacity: 1; transform: rotate(90deg); }
    `;
    document.head.appendChild(style);
};

const downloadReceipt = (data) => {
    const interestAmt = (data.amount * (data.interest / 100)).toFixed(0);
    const total = (parseFloat(data.amount) + parseFloat(interestAmt)).toLocaleString();
    
    const content = `
    ${translations[state.lang].brand.toUpperCase()} - PAYMENT PROOF
    ==========================================
    CUSTOMER DETAILS:
    Name: ${data.name}
    Age: ${data.age}
    Country: ${data.country}
    Date: ${data.date}
    ==========================================
    SERVICE DETAILS:
    Service Type: International Roaming
    Bundle: ${data.bundle}
    ==========================================
    FINANCIAL SUMMARY:
    Donation Amount: ${data.amount} RWF
    Bank Interest (${data.interest}%): ${interestAmt} RWF
    ------------------------------------------
    TOTAL PAID: ${total} RWF
    ==========================================
    Support: ${myContact}
    Thank you for using Hope Tree Eva!
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HopeTree_Receipt_${data.name.replace(/\s+/g, '_')}.txt`;
    a.click();
};

const renderPortal = () => {
    injectGlobalStyles();
    let overlay = document.querySelector('.roaming-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = `roaming-overlay`;
        document.body.appendChild(overlay);
    }

    const t = translations[state.lang];
    let bodyContent = "";

    if (state.view === 'selection') {
        bodyContent = `
            <div style="font-size: 12px; font-weight: 800; color: #2ecc71; margin-bottom: 5px;">${t.brand}</div>
            <h2 style="margin:0;">${t.title}</h2>
            <p style="font-size: 13px; opacity: 0.7;">${t.instruction}</p>
            <div class="bundle-box" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin:25px 0;">
                <div class="bundle-option ${state.selectedBundle === 'Day' ? 'selected' : ''}" onclick="state.selectedBundle='Day'; renderPortal()">${t.day}</div>
                <div class="bundle-option ${state.selectedBundle === 'Week' ? 'selected' : ''}" onclick="state.selectedBundle='Week'; renderPortal()">${t.week}</div>
                <div class="bundle-option ${state.selectedBundle === 'Month' ? 'selected' : ''}" onclick="state.selectedBundle='Month'; renderPortal()">${t.month}</div>
            </div>
            <button class="activate-btn" id="nextBtn">${t.btn}</button>
        `;
    } 
    else if (state.view === 'details') {
        bodyContent = `
            <h3 style="margin:0;">${t.donateTitle}</h3>
            <div class="form-group"><label>${t.name}</label><input type="text" id="inName" placeholder="John Doe"></div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                <div class="form-group"><label>${t.age}</label><input type="number" id="inAge" placeholder="25"></div>
                <div class="form-group"><label>${t.country}</label><input type="text" id="inCountry" placeholder="Rwanda"></div>
            </div>
            <div class="form-group"><label>${t.date}</label><input type="date" id="inDate"></div>
            <div class="form-group"><label>${t.amount} (RWF)</label><input type="number" id="inAmount" placeholder="5000"></div>
            <div class="form-group"><label>${t.interest}</label><input type="number" id="inInterest" placeholder="5"></div>
            <button class="activate-btn" id="saveBtn">${t.submitBtn}</button>
        `;
    }
    else if (state.view === 'receipt') {
        bodyContent = `
            <div class="receipt-box">
                <strong style="color:#2ecc71;">✓ ${t.success}</strong><hr>
                <strong>${t.name}:</strong> ${state.userData.name}<br>
                <strong>${t.amount}:</strong> ${state.userData.amount} RWF<br>
                <strong>Int.:</strong> ${state.userData.interest}%
            </div>
            <button class="activate-btn" id="dlBtn">${t.downloadBtn}</button>
            <button class="activate-btn" style="background:rgba(128,128,128,0.2); color:inherit;" onclick="state.view='selection'; renderPortal()">Back to Home</button>
        `;
    }

    overlay.innerHTML = `
        <div class="roaming-modal theme-${state.theme}">
            <span class="close-icon" id="closePortal">&times;</span>
            <div class="sys-bar">
                <button class="sys-btn" id="toggleLang">${t.langToggle}</button>
                <button class="sys-btn" id="toggleTheme">${t.themeToggle}</button>
            </div>
            ${bodyContent}
            <a href="tel:${myContact}" style="display:block; text-align:center; margin-top:20px; color:#2ecc71; text-decoration:none; font-size:13px; font-weight:bold;">📞 ${t.agentBtn}</a>
        </div>
    `;

    // Event Listeners
    document.getElementById('closePortal').onclick = () => document.body.removeChild(overlay);
    
    document.getElementById('toggleLang').onclick = () => {
        state.lang = state.lang === 'kin' ? 'en' : 'kin';
        renderPortal();
    };

    document.getElementById('toggleTheme').onclick = () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        renderPortal();
    };

    if (document.getElementById('nextBtn')) {
        document.getElementById('nextBtn').onclick = () => {
            if (!state.selectedBundle) return alert(translations[state.lang].day + "?");
            state.view = 'details'; renderPortal();
        };
    }

    if (document.getElementById('saveBtn')) {
        document.getElementById('saveBtn').onclick = () => {
            state.userData = {
                name: document.getElementById('inName').value,
                age: document.getElementById('inAge').value,
                country: document.getElementById('inCountry').value,
                date: document.getElementById('inDate').value,
                amount: document.getElementById('inAmount').value,
                interest: document.getElementById('inInterest').value,
                bundle: state.selectedBundle
            };
            if (!state.userData.name || !state.userData.amount) return alert("Fill all details!");
            state.view = 'receipt'; renderPortal();
        };
    }

    if (document.getElementById('dlBtn')) {
        document.getElementById('dlBtn').onclick = () => downloadReceipt(state.userData);
    }
};

// Initial trigger
roamingCard.addEventListener('click', (e) => {
    e.preventDefault();
    state.view = 'selection';
    renderPortal();
});





const helpCard = document.getElementById('helpService');

// Emergency Help System Logic
helpCard.addEventListener('click', (e) => {
    e.preventDefault();
    renderEmergencyPortal();
});

function renderEmergencyPortal() {
    // 1. Inject SOS-specific styles with high-urgency animations
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(244, 67, 54, 0); } 100% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); } }
        @keyframes shake { 0% { transform: translate(1px, 1px); } 10% { transform: translate(-1px, -2px); } 100% { transform: translate(1px, -1px); } }
        
        .sos-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: flex; justify-content: center; align-items: center; z-index: 99999; font-family: 'Inter', sans-serif; color: white; }
        .sos-modal { width: 90%; max-width: 400px; text-align: center; padding: 30px; border-radius: 25px; border: 2px solid #f44336; }
        
        .panic-btn { width: 150px; height: 150px; background: #f44336; border-radius: 50%; border: none; color: white; font-weight: 900; font-size: 24px; cursor: pointer; animation: pulse-red 2s infinite; margin: 20px 0; transition: transform 0.2s; -webkit-user-select: none; }
        .panic-btn:active { transform: scale(0.9); }
        
        .danger-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
        .danger-item { background: rgba(255,255,255,0.1); padding: 15px; border-radius: 12px; cursor: pointer; font-size: 14px; transition: 0.3s; border: 1px solid transparent; }
        .danger-item:hover { border-color: #f44336; background: rgba(244, 67, 54, 0.2); }
        
        .sos-close { position: absolute; top: 20px; right: 25px; font-size: 30px; cursor: pointer; opacity: 0.6; }
    `;
    document.head.appendChild(style);

    // 2. Create the Emergency UI
    const overlay = document.createElement('div');
    overlay.className = 'sos-overlay';
    overlay.innerHTML = `
        <div class="sos-modal">
            <span class="sos-close">&times;</span>
            <h1 style="color:#f44336; margin:0;">EMERGENCY SOS</h1>
            <p style="opacity:0.8; font-size:14px;">Hold the button for 3 seconds to alert Hope Tree Security</p>
            
            <button class="panic-btn" id="sosTrigger">HOLD SOS</button>
            
            <div id="sosStatus" style="height: 20px; font-weight: bold; margin-bottom: 10px;"></div>

            <div class="danger-grid">
                <div class="danger-item" onclick="reportDanger('Crime/Violence')">🛡️ Reporting Danger</div>
                <div class="danger-item" onclick="reportDanger('Medical Emergency')">🚑 Medical Help</div>
                <div class="danger-item" onclick="reportDanger('Accident')">🚧 Booking Issue</div>
                <div class="danger-item" onclick="reportDanger('Lost/Stolen')">📍 Lost Location</div>
            </div>
            
            <div style="margin-top: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                <p style="font-size: 12px; opacity: 0.6;">Local Emergency: <a href="tel:112" style="color:#f44336; font-weight:bold;">Call 112</a></p>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    // 3. Logic for Hold-to-Activate SOS
    const sosBtn = document.getElementById('sosTrigger');
    const status = document.getElementById('sosStatus');
    let timer;

    sosBtn.addEventListener('mousedown', () => {
        let count = 3;
        status.innerText = `Activating in ${count}...`;
        timer = setInterval(() => {
            count--;
            if (count > 0) {
                status.innerText = `Activating in ${count}...`;
            } else {
                clearInterval(timer);
                triggerGlobalAlert();
            }
        }, 1000);
    });

    sosBtn.addEventListener('mouseup', () => {
        clearInterval(timer);
        status.innerText = "";
    });

    // Close function
    document.querySelector('.sos-close').onclick = () => document.body.removeChild(overlay);
}

function triggerGlobalAlert() {
    alert("🚨 SOS ACTIVATED! \nHope Tree Emergency Branch has received your coordinates. \nStay where you are, help is on the way.");
    // In a real system, you would fetch(api_url) here to send GPS data.
}

window.reportDanger = (type) => {
    const details = prompt(`Briefly describe the ${type} situation:`);
    if (details) {
        alert(`Report Sent: Your ${type} report for Hope Tree Eva has been logged. Security is monitoring your booking.`);
    }
};



