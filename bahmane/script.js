function toggleModels(id) {
    const modelsDiv = document.getElementById(id);
    if (modelsDiv.classList.contains('hidden')) {
        modelsDiv.classList.remove('hidden');
    } else {
        modelsDiv.classList.add('hidden');
    }
}

const carData = {
    bmw: {
        title: "BMW M3",
        image: "cosySec.webp",
        description: "The BMW M3 is a high-performance luxury car with a 3.0L inline-6 engine producing 503 horsepower. It accelerates from 0 to 100 km/h in just 3.8 seconds and offers a top speed of 290 km/h with the M Driver's Package."
    },
    mercedes: {
        title: "Mercedes-Benz G63 AMG",
        image: "download (3).jpg",
        description: "The Mercedes-Benz G63 AMG is a luxury SUV powered by a 4.0L V8 biturbo engine delivering 585 horsepower. It combines off-road capability with high-end luxury and cutting-edge technology."
    }
};

function showCarInfo(carKey) {
    const carInfo = carData[carKey];
    if (carInfo) {
        document.getElementById("car-title").textContent = carInfo.title || "Car Title";
        document.getElementById("car-image").src = carInfo.image || "placeholder.jpg";
        document.getElementById("car-description").innerHTML = carInfo.description || "Car description goes here.";
        document.getElementById("car-info").classList.remove("hidden");
    }
}

function hideCarInfo() {
    document.getElementById("car-info").classList.add("hidden");
}

function filterModels() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const models = document.querySelectorAll(".brand ul li");
    models.forEach((model) => {
        if (model.textContent.toLowerCase().includes(query)) {
            model.style.display = "block";
        } else {
            model.style.display = "none";
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function filterBrandModels(brandId, type) {
    const brandDiv = document.getElementById(brandId);
    const models = brandDiv.querySelectorAll("ul li");
    models.forEach((li) => {
        if (type === "all" || li.getAttribute("data-type") === type) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}
