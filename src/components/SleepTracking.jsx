import React from 'react';
import styled from 'styled-components';

// Styled components for layout
const Container = styled.div`
  background-color: #1a1f3c;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
`;

const VisualizationSection = styled.div`
  flex: 2;
  position: relative;
`;

const StatsSection = styled.div`
  flex: 1;
  padding: 2rem;
  color: white;
`;

// Orbital component for the circular visualization
const OrbitalSystem = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

const Orbit = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  ${props => `
    width: ${props.size}px;
    height: ${props.size}px;
    top: ${250 - props.size/2}px;
    left: ${250 - props.size/2}px;
  `}
`;

const OrbitItem = styled.div`
  position: absolute;
  transform-origin: 50% 50%;
  ${props => `
    top: ${props.top}px;
    left: ${props.left}px;
    transform: rotate(${props.rotation}deg);
  `}
`;

// Slider component
const SliderContainer = styled.div`
  margin: 2rem 0;
`;

const Slider = styled.input`
  width: 100%;
  height: 4px;
  background: #4a90e2;
  border-radius: 2px;
`;

const SleepTracking = () => {
  const sleepHours = 6.5;
  const periodDuration = '3 weeks';
  
  return (
    <Container>
      <VisualizationSection>
        <OrbitalSystem>
          {/* Center emoji */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <span style={{ fontSize: '100px' }}>🫠</span>
          </div>
          
          {/* Orbits */}
          <Orbit size={300} />
          <Orbit size={400} />
          <Orbit size={500} />
          
          {/* Orbital items */}
          <OrbitItem top={100} left={400} rotation={45}>🍟</OrbitItem>
          <OrbitItem top={300} left={450} rotation={180}>💊</OrbitItem>
          <OrbitItem top={200} left={300} rotation={270}>💔</OrbitItem>
          <OrbitItem top={150} left={350} rotation={315}>🦠</OrbitItem>
        </OrbitalSystem>
      </VisualizationSection>

      <StatsSection>
        <SliderContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>🌙</span>
            <span>Average Weekday Sleep (hours)</span>
            <span>☀️ {sleepHours} hrs</span>
          </div>
          <Slider type="range" min="0" max="12" value={sleepHours} step="0.5" />
        </SliderContainer>

        <SliderContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>🌙</span>
            <span>Duration of the period</span>
            <span>☀️ {periodDuration}</span>
          </div>
          <Slider type="range" min="1" max="12" value={3} />
        </SliderContainer>

        <div style={{ marginTop: '2rem' }}>
          <p>You have XX hours of sleep debt</p>
          <p>You function the same as a person who hasn&apos;t slept for 3 days straight</p>
          <p>Your cognitive ability will be 1.5x slower,</p>
          <p>your immune response will be 3.1x weaker. You will catch more colds and will be less productive.</p>
          <p>you will crave unhealthy food and will gain weight</p>
          <p>You will need to sleep 2 more hours a day for 3 months straight to remove your sleep debt</p>
        </div>
      </StatsSection>
    </Container>
  );
};

export default SleepTracking; 