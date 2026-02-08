import React, { forwardRef } from 'react';

const TransitionOverlay = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="transition-overlay"
        >
            {/* Black Backdrop to hide scroll jump */}
            <div className="overlay-backdrop" />

            {/* Red Box for Zoom Effect - Positioned dynamically via JS */}
            <div className="overlay-box" />
        </div>
    );
});

export default TransitionOverlay;
