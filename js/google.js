google.load("language", "1");
function initialize()
{
    var text = document.getElementById("text").innerHTML;
    google.language.detect(text,
        function(result)
        {
            if(!result.error && result.language)
            {
                google.language.translate(text, result.language, "en",
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