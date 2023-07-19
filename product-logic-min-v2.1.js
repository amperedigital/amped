var Webflow=Webflow||[];Webflow.push((function(){function o(o){var i=$(".pack-size, .concentration, .pack-size option, .concentration option"),t=$(".oil-flavour, .oil-flavour option, .oil-pack-size, .oil-pack-size option, .oil-concentration, .oil-concentration option"),e=$(".treats-flavour, .treats-flavour option, .treats-pack-size, .treats-concentration, .treats-pack-size option, .treats-concentration option"),a=$(".tablets-pack-size, .tablets-concentration, .tablets-pack-size option, .tablets-concentration option"),n=$(".injections-pack-size, .injections-concentration, .injections-pack-size option, .injections-concentration option"),s=$(".liquidrecons-pack-size, .liquidrecons-concentration, .liquidrecons-pack-size option, .liquidrecons-concentration option"),l=$(".ointment-pack-size, .ointment-concentration, .ointment-pack-size option, .ointment-concentration option"),p=$(".otic-suspension-pack-size, .otic-suspension-concentration, .otic-suspension-pack-size option, .otic-suspension-concentration option"),r=$(".opthalmic-drops-pack-size, .opthalmic-drops-concentration, .opthalmic-drops-pack-size option, .opthalmic-drops-concentration option"),c=$(".opthalmic-ointment-pack-size, .opthalmic-ointment-concentration, .opthalmic-ointment-pack-size option, .opthalmic-ointment-concentration option"),u=$(".treats-flavour, .treats-flavour option, .aqueous-liquid-pack-size, .aqueous-liquid-concentration, .aqueous-liquid-pack-size option, .aqueous-liquid-concentration option"),d=$(".transdermal-gel-pack-size, .transdermal-gel-concentration, .transdermal-gel-pack-size option, .transdermal-gel-concentration option"),m=$(".opthalmic-aqueous-drops-pack-size, .opthalmic-aqueous-drops-concentration, .opthalmic-aqueous-drops-pack-size option, .opthalmic-aqueous-drops-concentration option"),q=$(".topical-ointment-pack-size, .topical-ointment-concentration, .topical-ointment-pack-size option, .topical-ointment-concentration option"),h=$(".rectal-gel-pack-size, .rectal-gel-concentration, .rectal-gel-pack-size option, .rectal-gel-concentration option"),f=$(".paste-pack-size, .paste-concentration, .paste-pack-size option, .paste-concentration option"),g=$(".pack-size, .concentration, .oil-flavour, .oil-pack-size, .oil-concentration, .treats-flavour, .treats-pack-size, .treats-concentration, .tablets-pack-size, .tablets-concentration, .injections-pack-size, .injections-concentration, .liquidrecons-pack-size, .liquidrecons-concentration, .ointment-pack-size, .ointment-concentration, .otic-suspension-pack-size, .otic-suspension-concentration, .opthalmic-drops-concentration, .opthalmic-drops-pack-size, .opthalmic-ointment-concentration, .opthalmic-ointment-pack-size, .aqueous-liquid-concentration, .aqueous-liquid-pack-size, .transdermal-gel-concentration, .transdermal-gel-pack-size, .opthalmic-aqueous-drops-concentration, .opthalmic-aqueous-drops-pack-size, .topical-ointment-pack-size, .topical-ointment-concentration, .rectal-gel-concentration, .rectal-gel-pack-size, .paste-concentration, .paste-pack-size");$(".oil-flavour, .oil, .treats, .treats-flavour, .capsules, .tablets, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .rectal-gel, .paste").hide(),i.prop("disabled",!0),t.prop("disabled",!0),e.prop("disabled",!0),a.prop("disabled",!0),n.prop("disabled",!0),s.prop("disabled",!0),l.prop("disabled",!0),p.prop("disabled",!0),r.prop("disabled",!0),c.prop("disabled",!0),u.prop("disabled",!0),d.prop("disabled",!0),RequiredOilsuspension.prop("disabled",!0),m.prop("disabled",!0),q.prop("disabled",!0),h.prop("disabled",!0),f.prop("disabled",!0),g.prop("required",!1),o.includes("Capsules")?($(".capsules").show(),$(".treats-flavour, .oil-flavour, .treats, .tablets, .oil, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),i.prop("required",!0).prop("disabled",!1)):"Oil Suspension"===o?($(".oil, .oil-flavour").show(),$(".treats-flavour, .treats, .tablets, .capsules, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),t.prop("required",!0).prop("disabled",!1)):o.includes("Treats")?($(".treats-flavour").show(),$(".treats").show(),$(".oil-flavour, .tablets, .oil, .capsules, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),e.prop("required",!0).prop("disabled",!1)):o.includes("Tablets")?($(".tablets").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),a.prop("required",!0).prop("disabled",!1)):o.includes("Injections")?($(".injections").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),n.prop("required",!0).prop("disabled",!1)):"Liquid Recons"===o?($(".liquidrecons").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),s.prop("required",!0).prop("disabled",!1)):"Ointment"===o?($(".ointment").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),l.prop("required",!0).prop("disabled",!1)):"Otic Suspension"===o?($(".otic-suspension").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),p.prop("required",!0).prop("disabled",!1)):"Opthalmic Drops"===o?($(".opthalmic-drops").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),r.prop("required",!0).prop("disabled",!1)):"Opthalmic Ointment"===o?($(".opthalmic-ointment").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),c.prop("required",!0).prop("disabled",!1)):"Aqueous Liquid"===o?($(".aqueous-liquid").show(),$(".treats-flavour").show(),$(".oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),u.prop("required",!0).prop("disabled",!1)):"Transdermal Gel"===o?($(".transdermal-gel").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel, .paste").hide(),d.prop("required",!0).prop("disabled",!1)):"Opthalmic Aqueous Drops"===o?($(".opthalmic-aqueous-drops").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .topical-ointment, .rectal-gel, .paste").hide(),m.prop("required",!0).prop("disabled",!1)):"Topical Ointment"===o?($(".topical-ointment").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .rectal-gel, .paste").hide(),q.prop("required",!0).prop("disabled",!1)):"Rectal Gel"===o?($(".rectal-gel").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .paste").hide(),h.prop("required",!0).prop("disabled",!1)):"Paste"===o&&($(".paste").show(),$(".treats-flavour, .oil-flavour, .oil, .capsules, .treats, .injections, .liquidrecons, .ointment, .otic-suspension, .opthalmic-drops, .opthalmic-ointment, .aqueous-liquid, .transdermal-gel, .opthalmic-aqueous-drops, .topical-ointment, .rectal-gel").hide(),f.prop("required",!0).prop("disabled",!1))}var i=$(".dosage-form").val();$(document).ready((function(){o(i)})),$(".dosage-form").on("change",(function(){o($(this).val()),initDynamicPrice()}))}));