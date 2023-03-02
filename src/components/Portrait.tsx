import Image from "next/image";

function Portrait() {
    return (
        <Image src="/portrait.jpg" fill alt="A headshot picture of me" className="grayscale opacity-80"
            style={{ objectFit: "cover" }}></Image>
    );
}

export default Portrait;