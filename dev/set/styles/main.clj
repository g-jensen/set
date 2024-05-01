(ns set.styles.main
  (:refer-clojure :exclude [rem])
  (:require [garden.def :as garden]
            [set.styles.core :as core]
            [set.styles.components.menus :as menus]
            [set.styles.elements.forms :as forms]
            [set.styles.elements.lists :as lists]
            [set.styles.elements.media :as media]
            [set.styles.elements.tables :as tables]
            [set.styles.elements.typography :as typography]
            [set.styles.layout.document :as document]
            [set.styles.layout.mini-classes :as mini-classes]
            [set.styles.layout.page :as page]
            [set.styles.layout.reset :as reset]
            [set.styles.layout.structure :as structure]
            [set.styles.media.responsive :as responsive]
            [set.styles.pages.authentication :as authentication]
            [set.styles.pages.authentication :as authentication]
            ))

(garden/defstyles screen

; Layout
;reset/screen
document/screen
page/screen
;structure/screen
mini-classes/screen

; Elements
;typography/screen
;forms/screen
;lists/screen
;media/screen
;tables/screen

; Componenents
;menus/screen

; Pages
;authentication/screen

; Media
;responsive/screen

; Fonts
;core/fonts

)
