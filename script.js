function copyCode() {
    // Créez un élément de texte
    const textElement = document.createElement("textarea");
    textElement.value = "çÉhû=C323a";

    // Ajoutez l'élément au corps du document
    document.body.appendChild(textElement);

    // Sélectionnez le texte dans l'élément de texte
    textElement.select();
    textElement.setSelectionRange(0, 99999); // Pour les appareils mobiles

    try {
        // Exécutez l'opération de copie
        document.execCommand("copy");
        const successOptions = {
            icons: {
                enabled: true,
                success: "check",
            },
            durations: {
                success: 5000, // Durée d'affichage de la notification en millisecondes (ici 3 secondes)
            },
            position: 'bottom-right', // Position de la notification sur l'écran
            labels: {
                success: 'Copié !', // Texte de la notification de succès
            },
        };
        let notifier = new AWN(successOptions);
        
        notifier.success('Le code est copié dans votre presse-papiers.');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }

    // Retirez l'élément de texte du document
    document.body.removeChild(textElement);
}
