import fs from 'fs'
import path from 'path'
const logUserInfo = (req, res) => {
    const { name, pass } = req.body; 
    const timestamp = new Date().toISOString();
    const logEntry = `User: ${name}, Password: ${pass}, Timestamp: ${timestamp}\n`;

    
    fs.appendFile(path.join('userLogs.txt'), logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file', err);
        }
    });
    
};
export default logUserInfo
