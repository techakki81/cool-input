import React from 'react'

export default function CoolInput({placeholderText="&nbsp;"}) {
    return (        
        //TODO empty spave what to do ?
            // <div class="custom-field"> 
            //     <label aria-label={ placeholderText || '&nbsp;' }>
            //         {/* we do not specify it on the placeolder type */}
            //         <input typpe="email"></input>                
            //     </label>        
            // </div>

            // <div class="custom-field">
            //       <input id="email-field" type="email"/>
            //       <label for="email-field" class="placeholder">
            //           Enter Email      Enter Email     Enter Email     Enter Email

            //        </label>
            // </div>

            <>
            <label className="custom-field">
  <input type="email" placeholder="&nbsp;"/>
  <span className="placeholder">Enter Email</span>
  <span className="error-message" aria-live="polite">The email is invalid</span>
</label>

<label className="custom-field one">
  <input type="text" placeholder=" "/>
  <span className="placeholder">Enter Text</span>
</label>

<label className="custom-field two">
  <input type="url" placeholder="&nbsp;"/>
  <span className="placeholder">Enter URL</span>
</label>

<label className="custom-field three">
  <input type="password" placeholder="&nbsp;"/>
  <span className="placeholder">Enter Password</span>
  <span className="border"></span>
</label>



            </>
    )



}
