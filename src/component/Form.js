import React from 'react';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import './Form.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
          border: "10px",
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const ContactUs = props => {
    
    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_gmail', 'template_jykc95y', e.target, 'user_wm3kKctHNSfyqyKGWINSe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return(
        <div className="contact-form-background">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail}>
                <TextField id="outlined-basic" label="Name" variant="outlined" name="name"/>
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email"/>
                <TextField id="outlined-basic" label="Subject" variant="outlined" name="subject"/>
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                    name="message"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                    type="submit"
                    value="Send"
                >
                    Send
                </Button>
            </form>
        </div>
    )

}

export default ContactUs;