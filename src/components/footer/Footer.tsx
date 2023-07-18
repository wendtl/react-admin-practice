import "./footer.scss"

interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer">
            <span>admin</span>
            <span>Example Admin Panel</span>
        </div>
    );
};

export default Footer;