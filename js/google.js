google.load("language", "1");
function initialize(obj)
{
    var text = document.getElementById("en_text").innerHTML;
    google.language.detect(text,
        function(result)
        {
            if(!result.error && result.language)
            {
                google.language.translate(text, result.language, obj,
                    function(result)
                    {
                        var translated = document.getElementById("translation");
                        if(result.translation)
                        {
                            translated.innerHTML = result.translation;
                        }
                    });
            }
        });
}
google.setOnLoadCallback(initialize);