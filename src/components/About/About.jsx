import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <Typography variant="h3" className="about-title">
        About VCET Hostel Connect
      </Typography>

      <Grid container spacing={15}>
        <Grid item xs={15}>
          <Paper className="about-section">
            <Typography variant="h5">Your Second Home</Typography>
            <Typography variant="body1" paragraph>
              The students can live away from home, with all the comforts they are used to plus added conveniences. 
              At VCET, students are part of a diverse and lively community of scholars. The hostel is dedicated to providing 
              a safe space to explore campus life, whether academic, athletic, cultural, recreational, or social.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="about-section">
            <Typography variant="h5">Student Activities</Typography>
            <Typography variant="body1" paragraph>
              For all-round development, the college offers various student activities ranging from sports and hobbies 
              to technical interests. Students are encouraged to join clubs like the Robotics Club, Programming Club, 
              Application Development Club, and Computer Services Center to explore their hidden talents and build organizational skills.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="about-section">
            <Typography variant="h5">Hostel Facilities</Typography>
            <Typography variant="body1" paragraph>
              Separate hostels are available for boys and girls, with accommodations for 360 boys and 420 girls. 
              The mess is spacious, with separate seating arrangements for vegetarians and non-vegetarians.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="about-section">
            <Typography variant="h5">Modern Amenities</Typography>
            <ul className="amenities-list">
              <li>Modern accommodation with Wi-Fi</li>
              <li>24/7 Security</li>
              <li>Hygienic dining facilities</li>
              <li>Recreation areas</li>
              <li>Study rooms</li>
              <li>Medical facilities</li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="about-section">
            <Typography variant="h5">Hostel Administration</Typography>
            <div className="table-container">
              <table className="wardens-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Contact Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dr. P. Alli, Principal</td>
                    <td>Chief Warden</td>
                    <td>9443566537</td>
                  </tr>
                  <tr>
                    <td>Dr. S. Gopalakrishnan</td>
                    <td>Warden/Men's Hostel</td>
                    <td>7373018067</td>
                  </tr>
                  <tr>
                    <td>Mrs. A. Maheswari</td>
                    <td>Warden/Ladies Hostel</td>
                    <td>9150343292</td>
                  </tr>
                  <tr>
                    <td>Mr. P. Radhakrishnan</td>
                    <td>Deputy Warden / Men's Hostel</td>
                    <td>9363338971</td>
                  </tr>
                  <tr>
                    <td>Mr. R. Thavamani</td>
                    <td>Deputy Warden / Men's Hostel</td>
                    <td>9566513579</td>
                  </tr>
                  <tr>
                    <td>Ms. N. Alima Banu</td>
                    <td>Deputy Warden / Women's Hostel</td>
                    <td>9944566610</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="about-section">
            <Typography variant="h5">Our Vision & Mission</Typography>
            <Typography variant="h6" className="sub-heading">Vision</Typography>
            <Typography variant="body1" paragraph>
              To revolutionize academic administration through innovative digital solutions that enhance the educational experience.
            </Typography>
            <Typography variant="h6" className="sub-heading">Mission</Typography>
            <Typography variant="body1" paragraph>
              Creating seamless connections between students, faculty, and administration while maintaining transparency and efficiency.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box className="about-footer">
        <Typography variant="body1" className="initiative-text">
          A proud initiative of the Department of Computer Science and Engineering, VCET
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
