$(document).ready(function () {
     $.getJSON("assets/portofolio/portofolio.json", function (data) {
           var web = data.portofolio.web;
           console.log(web);
        
           $.each(web, function (i, p) { 
                $('#works-container').append(`
                <div class="works border-b border-neutral-500 pb-3 mb-10 w-11/12 md:w-5/12">
                    <a href="${p.link}" class="works-preview cursor-pointer flex justify-center items-center" target="_blank">
                        <img src="./assets/portofolio/${p.image}" alt="">
                        <p class="bg-white p-1 absolute shadow-md visit-site">Visit Site</p>
                    </a>
                    <div class="works-detail grid grid-cols-2 p-1 gap-3">
                        <div class="works-detail-left">
                            <h5 class="font-anton works-name">${p.name}</h5>
                            <p class="works-uses break-all text-neutral-500 text-[12px]">` + 
                                $.each(p.uses, function (i, pu) { 
                                  pu 
                                }) +
                                `</p>
                        </div>
                    <div class="works-detail-right text-sm flex flex-col items-start justify-between">
                        <p class="works-type text-[12px]">${p.type}</p>
                        <button type="button">See Detail</button>
                    </div>
                    </div>
                </div>
                `)
           });
        
        }
    );
});