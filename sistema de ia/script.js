document.addEventListener('DOMContentLoaded', function () {
    // Elementos DOM
    const fileInput = document.getElementById('file-input');
    const uploadBtn = document.getElementById('upload-btn');
    const originalImg = document.getElementById('original-img');
    const originalPreviewImg = document.getElementById('original-preview-img');
    const enhancedImg = document.getElementById('enhanced-img');
    const enhanceBtn = document.getElementById('enhance-btn');
    const downloadBtn = document.getElementById('download-btn');
    const processingOverlay = document.getElementById('processing-overlay');
    const uploadArea = document.getElementById('upload-area');
    const comparisonToggle = document.getElementById('comparison-toggle');
    const comparisonContainer = document.getElementById('comparison-container');
    const compBefore = document.getElementById('comp-before');
    const compAfter = document.getElementById('comp-after');

    // Sliders
    const brightnessSlider = document.getElementById('brightness-slider');
    const contrastSlider = document.getElementById('contrast-slider');
    const saturationSlider = document.getElementById('saturation-slider');
    const sharpnessSlider = document.getElementById('sharpness-slider');

    // Valores
    const brightnessValue = document.getElementById('brightness-value');
    const contrastValue = document.getElementById('contrast-value');
    const saturationValue = document.getElementById('saturation-value');
    const sharpnessValue = document.getElementById('sharpness-value');

    // Stats
    const qualityValue = document.getElementById('quality-value');
    const detailsValue = document.getElementById('details-value');
    const colorValue = document.getElementById('color-value');

    // Variáveis globais
    let originalImageData = null;
    let currentEffect = 'optimized';
    let enhancedImageData = null;

    // Event Listeners
    uploadBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', function (e) {
        if (this.files && this.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                originalImg.src = e.target.result;
                originalImg.style.display = 'block';

                originalPreviewImg.src = e.target.result;
                originalPreviewImg.style.display = 'block';

                // Esconde o placeholder
                document.querySelector('#upload-area .preview-placeholder').style.display = 'none';
                document.querySelector('#original-preview .preview-placeholder').style.display = 'none';

                // Resetar comparação
                comparisonContainer.style.display = 'none';
                comparisonToggle.style.display = 'none';
            }

            reader.readAsDataURL(this.files[0]);
        }
    });

    // Slider events
    brightnessSlider.addEventListener('input', () => {
        brightnessValue.textContent = brightnessSlider.value;
    });

    contrastSlider.addEventListener('input', () => {
        contrastValue.textContent = contrastSlider.value;
    });

    saturationSlider.addEventListener('input', () => {
        saturationValue.textContent = saturationSlider.value;
    });

    sharpnessSlider.addEventListener('input', () => {
        sharpnessValue.textContent = sharpnessSlider.value;
    });

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ff4081';
        uploadArea.style.backgroundColor = 'rgba(255, 64, 129, 0.1)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '#5c6bc0';
        uploadArea.style.backgroundColor = '';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#5c6bc0';
        uploadArea.style.backgroundColor = '';

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            fileInput.files = e.dataTransfer.files;

            const reader = new FileReader();

            reader.onload = function (e) {
                originalImg.src = e.target.result;
                originalImg.style.display = 'block';

                originalPreviewImg.src = e.target.result;
                originalPreviewImg.style.display = 'block';

                // Esconde o placeholder
                document.querySelector('#upload-area .preview-placeholder').style.display = 'none';
                document.querySelector('#original-preview .preview-placeholder').style.display = 'none';

                // Resetar comparação
                comparisonContainer.style.display = 'none';
                comparisonToggle.style.display = 'none';
            }

            reader.readAsDataURL(e.dataTransfer.files[0]);
        }
    });

    // Enhance button
    enhanceBtn.addEventListener('click', function () {
        if (!originalImg.src) {
            alert('Por favor, selecione uma imagem primeiro!');
            return;
        }

        // Show processing overlay
        processingOverlay.style.display = 'flex';

        // Simulate AI processing
        let quality = 70;
        let details = 65;
        let color = 75;

        const interval = setInterval(() => {
            quality += Math.floor(Math.random() * 5);
            details += Math.floor(Math.random() * 5);
            color += Math.floor(Math.random() * 5);

            if (quality > 95) quality = 95;
            if (details > 97) details = 97;
            if (color > 98) color = 98;

            qualityValue.textContent = `${quality}%`;
            detailsValue.textContent = `${details}%`;
            colorValue.textContent = `${color}%`;
        }, 300);

        // After processing
        setTimeout(() => {
            clearInterval(interval);

            // Set enhanced image
            enhancedImg.src = originalImg.src;
            enhancedImg.style.display = 'block';
            document.querySelector('#enhanced-preview .preview-placeholder').style.display = 'none';

            // Apply enhancements based on sliders
            applyEnhancements();

            // Set comparison images
            compBefore.src = originalImg.src;
            compAfter.src = enhancedImg.src;

            // Apply effect to comparison
            applyEffectToComp();

            // Show comparison
            comparisonContainer.style.display = 'block';
            comparisonToggle.style.display = 'flex';

            // Hide processing
            processingOverlay.style.display = 'none';

            // Save image data for download
            enhancedImageData = enhancedImg.src;
        }, 3000);
    });

    // Comparison slider
    let isDragging = false;
    const sliderHandle = document.querySelector('#comparison-toggle .slider-handle');
    const sliderLeft = document.querySelector('.slider-left');
    const sliderRight = document.querySelector('.slider-right');

    comparisonToggle.addEventListener('mousedown', function (e) {
        isDragging = true;
        updateSlider(e);
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            updateSlider(e);
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    function updateSlider(e) {
        const rect = comparisonToggle.getBoundingClientRect();
        let x = e.clientX - rect.left;

        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        const percent = (x / rect.width) * 100;

        sliderHandle.style.left = `${x}px`;
        sliderLeft.style.width = `${x}px`;

        // Update comparison container
        document.querySelector('.image-after').style.width = `${percent}%`;
    }

    // Effect cards
    const effectCards = document.querySelectorAll('.effect-card');
    effectCards.forEach(card => {
        card.addEventListener('click', function () {
            effectCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentEffect = this.getAttribute('data-effect');

            // Apply effect to enhanced image
            applyEffectToEnhanced();
            applyEffectToComp();
        });
    });

    // Apply enhancements based on sliders
    function applyEnhancements() {
        const brightness = 1 + (brightnessSlider.value - 50) / 100;
        const contrast = 1 + (contrastSlider.value - 50) / 100;
        const saturation = 1 + (saturationSlider.value - 50) / 50;
        const sharpness = sharpnessSlider.value / 100;

        // Apply base filters
        enhancedImg.style.filter = `
                    brightness(${brightness})
                    contrast(${contrast})
                    saturate(${saturation})
                `;

        // Apply effect on top of base filters
        applyEffectToEnhanced();
    }

    // Apply effect to enhanced image
    function applyEffectToEnhanced() {
        let effectFilter = '';

        switch (currentEffect) {
            case 'night':
                effectFilter = 'brightness(0.8) contrast(1.2) saturate(1.5) hue-rotate(-10deg)';
                break;
            case 'portrait':
                effectFilter = 'contrast(1.1) brightness(1.05) saturate(1.1) blur(0.5px)';
                break;
            case 'nature':
                effectFilter = 'saturate(1.8) hue-rotate(10deg)';
                break;
            case 'urban':
                effectFilter = 'contrast(1.3) saturate(1.2) grayscale(0.2)';
                break;
            case 'artistic':
                effectFilter = 'sepia(0.5) saturate(1.5) contrast(0.9)';
                break;
            default: // optimized
                effectFilter = '';
        }

        // Combine base filters with effect filter
        const baseFilter = enhancedImg.style.filter;
        enhancedImg.style.filter = `${baseFilter} ${effectFilter}`;
    }

    // Apply effect to comparison image
    function applyEffectToComp() {
        compAfter.style.filter = enhancedImg.style.filter;
    }

    // Download button
    downloadBtn.addEventListener('click', function () {
        if (!enhancedImg.src) {
            alert('Por favor, processe uma imagem primeiro!');
            return;
        }

        // Create a temporary canvas to draw the enhanced image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;

            // Apply the same filters to canvas
            ctx.filter = enhancedImg.style.filter;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Create download link
            const link = document.createElement('a');
            link.download = 'foto_melhorada.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.95);
            link.click();
        };

        img.src = enhancedImg.src;
    });

    // Initialize slider values
    brightnessValue.textContent = brightnessSlider.value;
    contrastValue.textContent = contrastSlider.value;
    saturationValue.textContent = saturationSlider.value;
    sharpnessValue.textContent = sharpnessSlider.value;
});