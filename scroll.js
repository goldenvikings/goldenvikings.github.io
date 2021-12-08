function scroll_to(id) {
    console.log(id)
    switch (id) {
        case "godis-knapp":
            window.scrollTo({ top: document.getElementById("godis").offsetTop - 240, behavior: 'smooth'});
             /* ^ scrolla till 240px över godis sektionen så att navigationsrutan inte täcker */
            break

        case "deals-knapp":
            window.scrollTo({ top: document.getElementById("veckans-deals").offsetTop - 240, behavior: 'smooth'});
            break

        case "tobak-knapp":
            window.scrollTo({ top: document.getElementById("tobak").offsetTop - 240, behavior: 'smooth'});
            break

        case "choklad-knapp":
            window.scrollTo({ top: document.getElementById("choklad").offsetTop - 240, behavior: 'smooth'});
            break

        case "dryck-knapp":
            window.scrollTo({ top: document.getElementById("dryck").offsetTop - 240, behavior: 'smooth'});
            break
    }
}