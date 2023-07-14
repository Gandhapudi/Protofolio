import React from 'react'
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai"
const Footer = () => {
  return (
    <div class="footer-basic">
    <footer>
        <div class="social flex justify-center gap-10 p-4"><a href="mailto:gandhapudianilkumar0@gmail.com"><AiFillGoogleCircle /></a><a href="https://www.linkedin.com/in/gandhapudi-anil-kumar-26a638243/"><AiFillLinkedin /></a><a href="https://github.com/Gandhapudi"><AiFillGithub /></a></div>
        <ul class="list-inline flex justify-evenly p-4">
            <li class="list-inline-item"><a href="/#">Home</a></li>
            <li class="list-inline-item"><a href="#project">Projects</a></li>
            <li class="list-inline-item"><a href="#details">Details</a></li>
            <li class="list-inline-item"><a href="#acheivements">Certificates</a></li>
            <li class="list-inline-item"><a href="#contact">Contact</a></li>
        </ul>
        <p class="copyright text-center">G Anil Kumar © 2023</p>
    </footer>
</div>

  )
}

export default Footer