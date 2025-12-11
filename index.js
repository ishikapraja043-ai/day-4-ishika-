function checkPassword() {
    let p = document.getElementById("password").value;
    let n = false;
    let s = false;
    let sp = "!@#$%^&*";

    for (let i = 0; i < p.length; i++) {
        if (!isNaN(p[i]) && p[i] !== " ") n = true;
        if (sp.includes(p[i])) s = true;
    }

    let r = document.getElementById("result");

    if (p.length >= 8 && n && s) r.innerHTML = "Strong";
    else if (p.length >= 6 && (n || s)) r.innerHTML = "Medium";
    else r.innerHTML = "Weak";
}