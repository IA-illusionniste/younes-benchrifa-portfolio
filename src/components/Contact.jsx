import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, Calendar, Globe, MessageCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  // ⚠️ REMPLACEZ CES VALEURS PAR VOS VRAIES CLÉS EmailJS
  const EMAIL_SERVICE_ID = 'VOTRE_SERVICE_ID';
  const EMAIL_TEMPLATE_ID = 'VOTRE_TEMPLATE_ID';
  const EMAIL_PUBLIC_KEY = 'VOTRE_PUBLIC_KEY';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'youns.benchrifa@gmail.com'
        },
        EMAIL_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message envoyé avec succès !",
          description: "Merci pour votre message. Je vous répondrai dans les 24 heures.",
        });

        // Reset form
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer ou me contacter directement.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Demandes professionnelles et collaboration',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Ligne directe pour les urgences',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Marrakech, Maroc',
      description: 'Disponible pour des opportunités locales et à distance',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blue-100/20 opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">
              Contactez-moi
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Commençons une 
              <span className="text-blue-600 block lg:inline lg:ml-3">Conversation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prêt à discuter de nouvelles opportunités, défis techniques, ou collaborations potentielles. 
              J'aime toujours me connecter avec des professionnels et explorer des projets innovants.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-5">
              
              {/* Professional Contact Card */}
              <Card className="mb-8 shadow-xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-600 to-slate-900 text-white p-8 relative">
                    <div className="absolute inset-0 bg-white/10 opacity-30"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Prêt à me connecter</h3>
                          <p className="text-blue-200 text-sm">Professionnel & Collaboratif</p>
                        </div>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed mb-6">
                        Que vous cherchiez une expertise technique, des capacités de résolution de problèmes, 
                        ou un professionnel dévoué pour votre équipe, je suis là pour faire avancer vos projets.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-300" />
                          <span className="text-white/90">Disponible maintenant</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-blue-300" />
                          <span className="text-white/90">Télétravail OK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <a href={method.href || '#'} className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {method.label}
                            </h4>
                            <p className="text-blue-600 font-medium mb-1">
                              {method.value}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {method.description}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Response Time */}
              <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-900">Réponse rapide</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Je réponds généralement aux demandes professionnelles dans les 24 heures. 
                    Pour les urgences, appelez-moi directement.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-7">
              <Card className="shadow-xl border-0 h-full">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Envoyez-moi un message
                    </h3>
                    <p className="text-gray-600">
                      Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="from_name" className="text-sm font-medium text-gray-700">
                          Nom complet *
                        </Label>
                        <Input
                          id="from_name"
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleInputChange}
                          placeholder="Votre nom complet"
                          required
                          disabled={isSubmitting}
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="from_email" className="text-sm font-medium text-gray-700">
                          Adresse Email *
                        </Label>
                        <Input
                          id="from_email"
                          name="from_email"
                          type="email"
                          value={formData.from_email}
                          onChange={handleInputChange}
                          placeholder="votre.email@exemple.com"
                          required
                          disabled={isSubmitting}
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Sujet *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="De quoi s'agit-il ?"
                        required
                        disabled={isSubmitting}
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Parlez-moi de votre projet, opportunité, ou question..."
                        required
                        disabled={isSubmitting}
                        rows={6}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* Form Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                      En envoyant ce message, vous acceptez que je puisse vous contacter concernant 
                      des opportunités professionnelles et collaborations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
