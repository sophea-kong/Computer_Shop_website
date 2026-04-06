import React from 'react';

const LearnCardRight = ({ stepNumber, Icon, iconColor, iconBg, title, description, imageSrc, imageAlt, children }) => {
    return (
        <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
                <div className="relative h-64 md:h-auto overflow-hidden order-2 md:order-1">
                    <img 
                        src={imageSrc} 
                        alt={imageAlt} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`${iconBg} p-3 rounded-2xl`}>
                            <Icon className={iconColor} size={32} />
                        </div>
                        <span className={`${iconColor} font-bold text-lg uppercase tracking-widest`}>Step {stepNumber}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
                    <p className="text-slate-600 text-lg mb-8">{description}</p>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default LearnCardRight;