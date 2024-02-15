$(document).ready(function() {
    $(":input, a").attr("tabindex", "-1");
    
    /******Step 1: Alias (Name) *******************/
    $('#userNameBox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    
    $('#name-step').click(function(e) {
        e.preventDefault();
        if ($('#userNameBox').val().length != 0) {
            $('#name-alert').hide();
            $('.w-round div:nth-child(2)').trigger('tap');
        } else {
            $('#name-alert').show(500);
        }
    });

    /******Step 2: Email *******************/
    $('#email-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#email-step').click(function(e) {
        e.preventDefault();
        if ($('#email-input').val().length != 0) {
            $('#email-alert').hide();
            $('.w-round div:nth-child(3)').trigger('tap');
        } else {
            $('#email-alert').show(500);
        }
    });

    $('#email-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(1)').trigger('tap');
    });

    /******Step 3: Location (Continent) *******************/
    $('#location-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='location']").is(':checked')) {
            $('#location-alert').hide();
            $('.w-round div:nth-child(4)').trigger('tap');
        } else {
            $('#location-alert').show(500);
        }
    });

    $('#location-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });

    /******Step 4: Age Range *******************/
    $('#age-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='age']").is(':checked')) {
            $('#age-alert').hide();
            $('.w-round div:nth-child(5)').trigger('tap');
        } else {
            $('#age-alert').show(500);
        }
    });

    $('#age-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
    });

    /******Step 5: Years of Experience in Crypto *******************/
    $('#length-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='experience']").is(':checked')) {
            $('#length-alert').hide();
            $('.w-round div:nth-child(6)').trigger('tap');
        } else {
            $('#length-alert').show(500);
        }
    });

    $('#length-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });

    /******Step 6: Knowledge about NFTs *******************/
    $('#knowledge-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='knowledge']").is(':checked')) {
            $('#knowledge-alert').hide();
            $('.w-round div:nth-child(7)').trigger('tap');
        } else {
            $('#knowledge-alert').show(500);
        }
    });

    $('#knowledge-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(5)').trigger('tap');
    });

    /******Step 7: Favorite Cryptocurrency *******************/
    $('#cryptoBag-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#cryptoBag-step').click(function(e) {
        e.preventDefault();
        if ($('#cryptoBag-input').val().length != 0) {
            $('#cryptoBag-alert').hide();
            $('.w-round div:nth-child(8)').trigger('tap');
        } else {
            $('#cryptoBag-alert').show(500);
        }
    });

    $('#cryptoBag-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(6)').trigger('tap');
    });

    /******Step 8: Interested NFT Collections *******************/
    $('#nftCollection-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#nftCollection-step').click(function(e) {
        e.preventDefault();
        if ($('#nftCollection-input').val().length != 0) {
            $('#nftCollection-alert').hide();
            $('.w-round div:nth-child(9)').trigger('tap');
        } else {
            $('#nftCollection-alert').show(500);
        }
    });

    $('#nftCollection-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(7)').trigger('tap');
    });

    /******Step 9: Created or Collaborated on NFT *******************/
    $('#created-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#created-step').click(function(e) {
        e.preventDefault();
        if ($('#created-input').val().length != 0) {
            $('#created-alert').hide();
            $('.w-round div:nth-child(10)').trigger('tap');
        } else {
            $('#created-alert').show(500);
        }
    });

    $('#created-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(8)').trigger('tap');
    });



    /******Step 10: Opinion on Overhyped NFT Trend *******************/
    $('#trend-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#trend-step').click(function(e) {
        e.preventDefault();
        if ($('#trend-input').val().length != 0) {
            $('#trend-alert').hide();
            $('.w-round div:nth-child(11)').trigger('tap');
        } else {
            $('#trend-alert').show(500);
        }
    });

    $('#trend-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(9)').trigger('tap');
    });

    /******Step 11: Future of NFTs *******************/
    $('#future-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#future-step').click(function(e) {
        e.preventDefault();
        if ($('#future-input').val().length != 0) {
            $('#future-alert').hide();
            $('.w-round div:nth-child(12)').trigger('tap');
        } else {
            $('#future-alert').show(500);
        }
    });

    $('#future-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(10)').trigger('tap');
    });

    /******Step 12: Interest in Allowlist Opportunities *******************/
    $('#allowList-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='allowList']").is(':checked')) {
            $('#allowList-alert').hide();
            $('.w-round div:nth-child(13)').trigger('tap');
        } else {
            $('#allowList-alert').show(500);
        }
    });

    $('#allowList-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });

    /******Step 13: Interest in Non-Web3 Products/Services *******************/
    $('#physical-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='physical']").is(':checked')) {
            $('#physical-alert').hide();
            $('.w-round div:nth-child(14)').trigger('tap');
        } else {
            $('#physical-alert').show(500);
        }
    });

    $('#physical-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });

    /******Step 14: Interested in Collaboration or Work Opportunities *******************/
    $('#work-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='work']").is(':checked')) {
            $('#work-alert').hide();
            $('.w-round div:nth-child(15)').trigger('tap');
        } else {
            $('#work-alert').show(500);
        }
    });

    $('#work-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(13)').trigger('tap');
    });

    /******Step 15: Skills or Experiences for NFT Community *******************/
    $('#skills-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#skills-step').click(function(e) {
        e.preventDefault();
        if ($('#skills-input').val().length != 0) {
            $('#skills-alert').hide();
            $('.w-round div:nth-child(16)').trigger('tap');
        } else {
            $('#skills-alert').show(500);
        }
    });

    $('#skills-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(14)').trigger('tap');
    });

    /******Step 16: Frequency of Trading or Purchasing NFTs *******************/
    $('#transaction-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='transaction']").is(':checked')) {
            $('#transaction-alert').hide();
            $('.w-round div:nth-child(17)').trigger('tap');
        } else {
            $('#transaction-alert').show(500);
        }
    });

    $('#transaction-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(15)').trigger('tap');
    });

    /******Step 17: View of NFTs (Investment, Collectible, etc.) *******************/
    $('#view-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='view']").is(':checked')) {
            $('#view-alert').hide();
            $('.w-round div:nth-child(18)').trigger('tap');
        } else {
            $('#view-alert').show(500);
        }
    });

    $('#view-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(16)').trigger('tap');
    });

    /******Step 18: Preferred NFT Trading Platform *******************/
    $('#platform-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#platform-step').click(function(e) {
        e.preventDefault();
        if ($('#platform-input').val().length != 0) {
            $('#platform-alert').hide();
            $('.w-round div:nth-child(19)').trigger('tap');
        } else {
            $('#platform-alert').show(500);
        }
    });

    $('#platform-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(17)').trigger('tap');
    });

    /******Step 19: Activity in NFT Communities *******************/
    $('#active-step').click(function(e) {
        e.preventDefault();
        if ($("input[name='active']").is(':checked')) {
            $('#active-alert').hide();
            $('.w-round div:nth-child(20)').trigger('tap');
        } else {
            $('#active-alert').show(500);
        }
    });

    $('#active-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(18)').trigger('tap');
    });

    /******Step 20: Go-To Sources for NFT News *******************/
    $('#sources-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#sources-step').click(function(e) {
        e.preventDefault();
        if ($('#sources-input').val().length != 0) {
            $('#sources-alert').hide();
            $('.w-round div:nth-child(21)').trigger('tap');
        } else {
            $('#sources-alert').show(500);
        }
    });

    $('#sources-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(19)').trigger('tap');
    });

    /******Step 21: Challenges in NFT Market *******************/
    $('#challenges-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#challenges-step').click(function(e) {
        e.preventDefault();
        if ($('#challenges-input').val().length != 0) {
            $('#challenges-alert').hide();
            $('.w-round div:nth-child(22)').trigger('tap');
        } else {
            $('#challenges-alert').show(500);
        }
    });

    $('#challenges-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(20)').trigger('tap');
    });

    /******Step 22: Impact of NFTs on Digital Art *******************/
    $('#impact-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#impact-step').click(function(e) {
        e.preventDefault();
        if ($('#impact-input').val().length != 0) {
            $('#impact-alert').hide();
            $('.w-round div:nth-child(23)').trigger('tap');
        } else {
            $('#impact-alert').show(500);
        }
    });

    $('#impact-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(21)').trigger('tap');
    });

    /******Step 23: Desired Innovations in NFT Space *******************/
    $('#innovation-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#innovation-step').click(function(e) {
        e.preventDefault();
        if ($('#innovation-input').val().length != 0) {
            $('#innovation-alert').hide();
            $('.w-round div:nth-child(24)').trigger('tap');
        } else {
            $('#innovation-alert').show(500);
        }
    });

    $('#innovation-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(22)').trigger('tap');
    });

    /******Step 24: Preferences for Personalized Content *******************/
    $('#content-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#content-step').click(function(e) {
        e.preventDefault();
        if ($('#content-input').val().length != 0) {
            $('#content-alert').hide();
            $('.w-round div:nth-child(25)').trigger('tap');
        } else {
            $('#content-alert').show(500);
        }
    });

    $('#content-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(23)').trigger('tap');
    });
    // ... (Previous steps)

    /****** Step 25: Qualities Looked for in NFT Projects *******************/
    $('#dd-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#dd-step').click(function(e) {
        e.preventDefault();
        if ($('#dd-input').val().length != 0) {
            $('#dd-alert').hide();
            $('.w-round div:nth-child(26)').trigger('tap');
        } else {
            $('#dd-alert').show(500);
        }
    });

    $('#dd-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(24)').trigger('tap');
    });

    /****** Step 26: Idea for Own NFT *******************/
    $('#dream-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#dream-step').click(function(e) {
        e.preventDefault();
        if ($('#dream-input').val().length != 0) {
            $('#dream-alert').hide();
            $('.w-round div:nth-child(27)').trigger('tap');
        } else {
            $('#dream-alert').show(500);
        }
    });

    $('#dream-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(25)').trigger('tap');
    });

    /****** Final Step: Any Last Comments *******************/
    $('#comments-input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('#submit-step').click(function(e) {
        e.preventDefault();
        if ($('#comments-input').val().length != 0) {
            $('#comments-alert').hide();
            // Handle the final submission logic here
        } else {
            $('#comments-alert').show();
        }
    });

    $('#comments-prev').click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(26)').trigger('tap');
    });

  });
