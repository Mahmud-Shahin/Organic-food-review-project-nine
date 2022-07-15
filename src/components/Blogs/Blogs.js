import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h1>What is Contex Api?</h1>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.It's Normally
                    works a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent</p>
            </div>
            <div>
                <h1>What is Semantic Tag?</h1>
                <p>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents. examples: <br />
                    1. article <br />
                    2.  nav <br />
                    3. section <br />
                    4. footer <br />
                    5. aside <br />
                    6. form
                </p>
            </div>
            <div>
                <h1>What is the difference between inline block and inline-block element?</h1>
                <p>inline The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height. inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.</p>
            </div>

        </div>
    );
};

export default Blogs;