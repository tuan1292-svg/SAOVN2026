const loginForm = document.getElementById("loginForm");

const identityInput = document.getElementById("identity");
const passwordInput = document.getElementById("password");

const identityError = document.getElementById("identityError");
const passwordError = document.getElementById("passwordError");

const formStatus = document.getElementById("formStatus");

const loginButton = document.getElementById("loginButton");
const passwordToggle = document.getElementById("passwordToggle");

/*

* =========================================================
* DEMO AUTHENTICATION
* =========================================================
*
* Temporary frontend-only authentication.
*
* This will later be replaced by the real
* SAOVN-OS Authentication / Session API.
  */

const DEMO_IDENTITY = "admin";
const DEMO_PASSWORD = "saovn";

/*

* =========================================================
* HELPERS
* =========================================================
  */

function clearErrors() {

```
identityError.textContent = "";
passwordError.textContent = "";

document
    .querySelectorAll(".form-group")
    .forEach((group) => {
        group.classList.remove("has-error");
    });

formStatus.textContent = "";
formStatus.className = "form-status";
```

}

function showIdentityError(message) {

```
identityError.textContent = message;

identityInput
    .closest(".form-group")
    .classList.add("has-error");
```

}

function showPasswordError(message) {

```
passwordError.textContent = message;

passwordInput
    .closest(".form-group")
    .classList.add("has-error");
```

}

function showFormError(message) {

```
formStatus.textContent = message;

formStatus.className =
    "form-status visible error";
```

}

function setLoading(isLoading) {

```
loginButton.disabled = isLoading;

if (isLoading) {

    loginButton.classList.add("loading");

} else {

    loginButton.classList.remove("loading");

}
```

}

/*

* =========================================================
* PASSWORD VISIBILITY
* =========================================================
  */

passwordToggle.addEventListener("click", () => {

```
const isPassword =
    passwordInput.type === "password";

passwordInput.type =
    isPassword ? "text" : "password";

passwordToggle.setAttribute(
    "aria-label",
    isPassword
        ? "Ẩn mật khẩu"
        : "Hiện mật khẩu"
);
```

});

/*

* =========================================================
* VALIDATION
* =========================================================
  */

function validateForm() {

```
clearErrors();

const identity =
    identityInput.value.trim();

const password =
    passwordInput.value;

let valid = true;


if (!identity) {

    showIdentityError(
        "Vui lòng nhập Identity."
    );

    valid = false;

}


if (!password) {

    showPasswordError(
        "Vui lòng nhập mật khẩu."
    );

    valid = false;

}


return valid;
```

}

/*

* =========================================================
* DEMO AUTHENTICATION
* =========================================================
  */

function authenticate(identity, password) {

```
return (
    identity === DEMO_IDENTITY &&
    password === DEMO_PASSWORD
);
```

}

/*

* =========================================================
* LOGIN
* =========================================================
  */

loginForm.addEventListener("submit", async (event) => {

```
event.preventDefault();


if (!validateForm()) {
    return;
}


const identity =
    identityInput.value.trim();

const password =
    passwordInput.value;


setLoading(true);


/*
 * Simulate network latency.
 *
 * This delay will disappear when the real
 * Authentication API is connected.
 */

await new Promise((resolve) => {

    setTimeout(resolve, 700);

});


const authenticated =
    authenticate(
        identity,
        password
    );


if (!authenticated) {

    setLoading(false);

    showFormError(
        "Identity hoặc mật khẩu không chính xác."
    );

    passwordInput.focus();

    return;
}


/*
 * Temporary demo session.
 *
 * The real implementation will later receive
 * a server-generated Session from SAOVN-OS Core.
 */

sessionStorage.setItem(
    "saovn_demo_authenticated",
    "true"
);

sessionStorage.setItem(
    "saovn_demo_identity",
    identity
);


/*
 * Navigate to Dashboard.
 */

window.location.href =
    "dashboard.html";
```

});

/*

* =========================================================
* INPUT CLEANUP
* =========================================================
  */

identityInput.addEventListener("input", () => {

```
identityError.textContent = "";

identityInput
    .closest(".form-group")
    .classList.remove("has-error");

formStatus.textContent = "";
formStatus.className = "form-status";
```

});

passwordInput.addEventListener("input", () => {

```
passwordError.textContent = "";

passwordInput
    .closest(".form-group")
    .classList.remove("has-error");

formStatus.textContent = "";
formStatus.className = "form-status";
```

});
