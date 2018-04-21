<head>
   <style>
	body {
	   font-size: 5em;	
        }
   </style>
</head>
<body>
<script>
  console.log('this is not a static page. php is run serverside');
</script>
<?php

       if (isDomainAvailible('https://cate.doc.ic.ac.uk'))
       {
               echo "CATe is up and running!";
       }
       else
       {
               echo "CATe is down :(";
       }

       //returns true, if domain is availible, false if not
       function isDomainAvailible($domain)
       {
               //check, if a valid url is provided
               if(!filter_var($domain, FILTER_VALIDATE_URL))
               {
                       return false;
               }

               //initialize curl
               $curlInit = curl_init($domain);
               curl_setopt($curlInit,CURLOPT_CONNECTTIMEOUT,10);
               curl_setopt($curlInit,CURLOPT_HEADER,true);
               curl_setopt($curlInit,CURLOPT_NOBODY,true);
               curl_setopt($curlInit,CURLOPT_RETURNTRANSFER,true);

               //get answer
               $response = curl_exec($curlInit);

               curl_close($curlInit);

               if ($response) return true;

               return false;
       }
?>
</body>
