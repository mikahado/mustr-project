import React from 'react';

const About = () => {
    return (
    <div>
        <div className="App">
            <br/>
            <h1>ABOUT MUSTR</h1>
            <h2>the app for collaborative writers</h2>
                  
        </div>
        
        <div>

            <h2 id="mustr">MUSTR</h2>
            <p>Mustr is a turn-based, collaborative app for spontaneous, fearless writing. From film to commercial, stories to speeches, Mustr provides guided prompts (forms, patterns, and gmeas) for writers to collaborate, and let their creativity flourish together.</p>
            <h2 id="how-to-install">How to Install</h2>
            <p>Fork and clone from GitHub:</p>
            <p>https://github.com/mikahado/phase-2-project</p>
            <p>Run a json server:</p>
            <pre><code>json-server --watch db.json --port 3000  </code></pre>
            <p>Run the scripts, to view in browser:</p>
            <pre><code>npm start</code></pre>
            <p>Follow the on-screen instructions.</p>
            <h2 id="instructions">Instructions</h2>
            <ol type="1">
           
            <li><p>Choose a method, a program that guides the form of their writing, but keeps the text box ready to fill.</p>
            <p>In this MVP, the first available feature – The Exquisite Horse – is available to try.</p></li>
            </ol>
            <h2 id="the-exquisite-horse">The Exquisite Horse</h2>
            <p>The Exquisite Horse is the first of many features of MUSTR.</p>
            <blockquote>
            <p><em>The Exquisite Corpse</em> was a classic, collaborative, writing game, invented in the 1920s.</p>
            </blockquote>
            <p>In this app, we call it <strong>The Exquisite Horse</strong> (yes, yes, a donkey).</p>
            <h3 id="rules">Rules</h3>
            <p>General rule: each collaborator is unaware of what the others have written.</p>
            <p>Here, the current author is only aware of what the previous author has written. All lines written beforehand are hidden!</p>
            <p>The entries are saved in order, and only revealed after all lines have been saved, individually.</p>
            <blockquote>
            <p>This writing method incites a sometimes absurd, often beautiful, piece of writing.</p>
            </blockquote>
            <h2 id="why-turn-based-writing">Why Turn-Based Writing?</h2>
            <p>MUSTR is turn-based. In all of our features the same rule follows: After one user writes their piece, they pass it on to the next! After you send your writing to your collaborator, it is set in stone! (Of course, that is, until everyone has had a turn – then you can edit).</p>
            <p>The benefit of turn-based (as opposed to synchronous writing – like GoogleDocs – where everyone can edit simultaneously) is that it works for <em>democratic collaboration</em>. No one writer can take control until a complete full draft has been drafted!</p>
        </div>

        <br /><br />

     </div>
    )
}

export default About