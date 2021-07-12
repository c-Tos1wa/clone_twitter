import Link from 'next/link'
import LogoIcon from '../../components/logoicon'

export default function PasswordReset(){
  return(
    <>
      <div className="header">
        <LogoIcon />
        <div>Password Reset</div>
        <div>
            <label for="language"></label>
            <select id="language" name="language">
              <option>English</option>
              <option>Portuguese</option>
            </select>
        </div>
      <div className="body">
        <div>Find your Chipper account</div>
        <div>Enter your email, phone number or username.</div>
        <form action="" method="Post">
          <input type="text" />
        </form>
        <input type="submit" value="Search" />
      </div>
    </div>
    </>
  )
}