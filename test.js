const form = document.querySelector(".variations_form")
if (form) {
  const variants = JSON.parse(form.getAttribute("data-product_variations"));
  form.onclick = function() {
    setTimeout(() => {
      const paSizeElm = document.querySelector('[data-id="pa_size"]');
      const enabled = paSizeElm.querySelector(".wd-active.wd-enabled");
      const priceElm = document.querySelector('[data-widget_type="wd_single_product_price.default"]')
      if (enabled) {
        const size = enabled.getAttribute("data-value");
        for (let i = 0; i< variants.length;i++) {
          if (variants[i].attributes['attribute_pa_size'] === size) {
            priceElm.classList.add("hidden")
            let priceElmChanged = document.querySelector('[data-widget_type="wd_single_product_price.changed"]')
            if (!priceElmChanged) {
              priceElmChanged = document.createElement("div")
              priceElmChanged.setAttribute("data-widget_type", "wd_single_product_price.changed")
              priceElmChanged.classList.add("custom-price")
            }
            priceElmChanged.innerHTML = variants[i]['price_html'] + variants[i]['variation_description']
            priceElm.parentNode.insertBefore(priceElmChanged, priceElm.nextSibling)
            return;
          }
        }
      }
      const priceElmChanged = document.querySelector('[data-widget_type="wd_single_product_price.changed"]');
      priceElm.classList.remove('hidden');
      if (priceElmChanged) {
        priceElmChanged.remove();
      }
    }, 200)
  }

}
