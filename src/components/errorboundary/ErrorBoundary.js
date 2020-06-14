import React, { Component } from 'react';
import NotFound from '../../views/notfound/NotFound'

// Veo que descubriste una de los poquisimas cosas que hooks aun no puede hacer:
// getDerivedStateFromError tras un catch. 
// Es medio raro que todo tu proyecto este en funciones y solo este componente en clases, 
// aunque es inevitable si queres hacer esto. 
// Quiza investigar maneras alternativas de reaccionar a un potencial error...?

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
       console.log(error, errorInfo);
      }
      
      render() {
        if (this.state.hasError) {
          return <NotFound/>;
        }
    
        return this.props.children; 
      }
}

export default ErrorBoundary;
