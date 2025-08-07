import { useState, useTransition } from "react"
function UserTransitionCompnent(){
    const [isPending, startTransition] = useTransition(false);

    const handleButton = () => {
        startTransition(async () => {
            await new Promise((resolve, reject) => setTimeout(resolve, 1000));
        })
    }

    return(
        <div>
            <h1>UseTransition</h1>
            {
                isPending && (
                    <h1>Loading...</h1>
                )
            }
            <button disabled={isPending} onClick={handleButton}>Click</button>
        </div>
    )
}

export default UserTransitionCompnent;